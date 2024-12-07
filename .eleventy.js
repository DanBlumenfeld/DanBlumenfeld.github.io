import { DateTime } from "luxon"; // Date formatting

export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/dist");

    eleventyConfig.addShortcode('excerpt', post => extractExcerpt(post));
    function extractExcerpt(post) {
        if (!post.templateContent) return '';        
        let content = post.templateContent;    
        if (content.indexOf('</p>') > 0) {
            let end = content.indexOf('</p>');
            content = content.substr(0, end + 4);
        }    
        // Strip HTML tags using a regex
        content = content.replace(/<\/?[^>]+(>|$)/g, "");    
        return content;
    };

    eleventyConfig.addFilter("compactDate", (dateString) => {
        return DateTime.fromJSDate(new Date(dateString)).toFormat("MMM dd, yyyy");
    });

    eleventyConfig.addFilter("filterByCategory", function(posts, category) {
        /*
        case matters, so let's lowercase the desired category
        and we will lowercase our posts categories
        */
        category = category.toLowerCase();
        let result = posts.filter(p => {
            let categories = p.data.categories.map(s => s.toLowerCase());
            return categories.includes(category);
        });
        return result;
    });

    eleventyConfig.addCollection("blogcategories", function(collectionApi) {
        let categories = new Set();
        let posts = collectionApi.getFilteredByTag('blog');
        posts.forEach(p => {
            let cats = p.data.categories;
            cats.forEach(c => categories.add(c));
        });
        return Array.from(categories);
    });

    eleventyConfig.addCollection("ntscategories", function(collectionApi) {
        let categories = new Set();
        let posts = collectionApi.getFilteredByTag('nts');
        posts.forEach(p => {
            let cats = p.data.categories;
            cats.forEach(c => categories.add(c));
        });
        return Array.from(categories);
    });
    

    return {
        dir: {
            input: 'src',
            includes: '_includes',
            output: '_site',
        },
        templateFormats: ['md', 'njk', 'html'],
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
    };
};
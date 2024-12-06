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
    }

    eleventyConfig.addFilter("compactDate", (dateString) => {
        return DateTime.fromJSDate(new Date(dateString)).toFormat("MMM dd, yyyy");
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
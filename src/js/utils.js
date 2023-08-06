export const addLineBreaks = (string) => string.replace(/\n/g, '<br/>')

export const extractIframeSrc = (string) => {
    const iframeRegex = /<iframe[^>]*src="([^"\\]*)"[^>]*>/
    const match = string.match(iframeRegex)
    if (match && match.length > 1) {
        const srcUrl = match[1].replace(/\\"/g, '"')
        return srcUrl
    }
    return null
}

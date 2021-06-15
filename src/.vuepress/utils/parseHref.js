export default function parseHref(href) {
    const isGithub = typeof window === 'undefined'
        ? false
        : window.location.href.includes('github');

    if (!isGithub) {
        return href;
    }

    const REPO_NAME_INDEX = 3;
    const urlChunks = window.location.href.split('/');
    const repoName = urlChunks[REPO_NAME_INDEX];
    const pathname = `/${repoName}${href}`;

    console.log('parseHref', {
        href,
        pathname,
        REPO_NAME_INDEX,
        urlChunks,
        repoName,
        pathname,

    });

    return pathname;
}
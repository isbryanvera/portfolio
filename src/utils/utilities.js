export function classnames(classes,objeto) {
    for (const key in objeto) {
        if (objeto[key]) {
            classes += ' '+ key + ' ';
        }
    }
    return classes.trim();
}
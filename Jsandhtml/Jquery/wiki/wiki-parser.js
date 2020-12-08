function wikiParser(wiki) {
    let content = $('#wiki').text().trim();
    $("#wiki").hide();
    let textArray = Array.from(content);
    let token = ''; let text = '';
    let div = $('div');
    for (let i = 0; i < textArray.length; i++) {
        let ch = textArray[i];
        if (/^[a-zA-Z0-9 |]*$/.test(ch) === false) {
            if (text !== '') {
                switch (token) {
                    case "===": div.append("<h3>" + text + "</h3>"); break;
                    case "==": div.append("<h2>" + text + "</h2>"); break;
                    case "=": div.append("<h1>" + text + "</h1>"); break;
                    case "'''": div.append("<b>" + text + "</b>"); break;
                    case "''": div.append("<i>" + text + "</i>"); break;
                    case "[[": {
                        if (text.includes("|")) {
                            let link = text.split("|");
                            div.append("<a href='/wiki/" + link[0] + "'>" + link[1] + "</a>"); break;
                        }
                        else {
                            div.append("<a href='/wiki/" + text + "'>" + text + "</a>"); break;
                        }
                    }
                    default: div.append(text); break;
                }
                i += token.trim().length - 1;
                token = '';
                text = '';
            }
            else {
                token += ch;
            }
        }
        else {
            text += ch;
        }
    }
}

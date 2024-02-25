export enum TokenType {
    Number,
    Identifier,
    Equals,
    OpenParen,
    CloseParen,
    BinaryOperator,
    Let,
}

export interface Token {
    value: string,
    type: TokenType,
}


export function tokenize (sourceCode: string) Token[] {

    const tokens = new Array<Token>();
    const src = sourceCode.split("");

    while (src.lenght >  0) {
        if (src[0] == "(")
        tokens.push({type: TokenType.OpenParen, value,})
    }

    return tokens;

}
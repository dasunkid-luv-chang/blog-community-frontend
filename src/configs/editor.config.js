import Header from "@editorjs/header"
import List from "@editorjs/list"
import Paragraph from "@editorjs/paragraph"
import Code from "@editorjs/code"
import Delimeter from "@editorjs/delimiter"
import Quote from "@editorjs/quote"

const editorConfig = {
    holder: "editorjs", //Id of Element that should contain the Editor
    tools: {
        header: {
            class: Header,
            config: {
                placeholder: "Enter a header",
                levels: [2, 3, 4, 5],
                defaultLevel: 2,
            },
        },
        list: List,
        paragraph: Paragraph,
        code: Code,
        delimiter: Delimeter,
        quote: Quote,
    },

    data: {}, // previously saved data of the Editor
    autofocus: true,
    placeholder: "Let`s write an awesome story!",
}

export default editorConfig

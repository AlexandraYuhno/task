type StyleObject = { backgroundColor?: string };

function convertStyle(style: StyleObject): void;
function convertStyle(key: string, style: StyleObject): void;
function convertStyle(key: string): void;

function convertStyle(arg1: string | StyleObject, arg2?: StyleObject): void {
    /*логика*/
}

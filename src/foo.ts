export default class Foo {
    public bar;
    constructor() {
        this.bar = 'hi';
    }
    public static show() {
        console.log('Foo::show()');
    }
}

export let TESTVAR = 9999;
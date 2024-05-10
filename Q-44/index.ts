function make_sandwich(...items:string[]) {
    console.log(`Making a sandwich with : ${items.join(`,`)}.`);
}
make_sandwich("cheese","mayo");
make_sandwich("ketchup","lettuce","onion");
make_sandwich("tomato","cabbage","mustard");

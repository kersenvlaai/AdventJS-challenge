const gifts = ['cat', 'game', 'socks'];
const wrapped = wrapping(gifts);

function wrapping(gifts) {
    const wrappedGifts = gifts.map(
        (x) =>
            `${'*'.repeat(x.length + 2)}\n*${x}*\n${'*'.repeat(x.length + 2)}`
    );

    return wrappedGifts;
}

console.log(wrapped);

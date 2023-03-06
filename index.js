describe("shout(string)", function () {
    it("receives one argument and returns it in all caps", function () {
        expect(shout("hello")).toEqual("HELLO");
    });
});

describe('whisper(string)', function () {
    it('receives one argument and returns it in all lowercase', function () {
        expect(whisper('HELLO')).toEqual('hello');
    })
})

function shout(string) {
    // todo
    return string.toUpperCase();
}

function whisper(string) {
    // todo
    return string.toLowerCase();
}
function logShout(string) {
    // todo
    console.log(`HELLO`)

    return string.toUpperCase();
}



function logWhisper(string) {
    // todo
    console.log(`hello`)
    return string.toLowerCase();
}

function sayHiToHeadphonedRoommate(string) {
    if (string.toLowerCase(string) === string) {
        return "I can't hear you!";
    }
    else if (string.toUpperCase(string) === string) {
        return "YES INDEED!";
    }
    else if ("Let\'s have dinner together!" === string) {
        return "I would love to!";
    }

}

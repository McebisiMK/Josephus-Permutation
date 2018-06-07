describe("JosephusSurvivor", function () {
    describe("Given [1,2,3,4,5] people in a circle and you step 3 times before eliminating", function () {
        [{ input: 2, step: 0, expected: "Step can not be zero" },
        { input: 4, step: 1, expected: 4 },
        { input: 100, step: 1, expected: 100 },
        { input: 1, step: 3, expected: 1 },
        { input: 1, step: 300, expected: 1 },
        { input: 4, step: 2, expected: 1 },
        { input: 7, step: 3, expected: 4 },
        { input: 11, step: 19, expected: 10 },
        { input: 14, step: 2, expected: 13 }]
            .forEach(function (element) {
                it("should return first person as survivor", function () {
                    //----------------Arrange------------
                    let josephusSurvivor = new JosephusSurvivor();
                    //----------------Act----------------
                    let actual = josephusSurvivor.getSurvivor(element.input, element.step);

                    //----------------Assert-------------
                    expect(actual).toBe(element.expected);

                })
            })
    })
})
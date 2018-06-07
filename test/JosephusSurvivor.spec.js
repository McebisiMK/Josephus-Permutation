describe("JosephusSurvivor", function () {
    describe("Given certain number of people in a circle and you step 1 time before eliminating", function () {
        [{ input: 4, step: 1, expected: 4 },
        { input: 14, step: 1, expected: 14 },
        { input: 100, step: 1, expected: 100 }]
            .forEach(function (element) {
                it("should return first person as survivor", function () {
                    //----------------Arrange------------
                    let model = new ArrayOfPeople();
                    let josephusSurvivor = new JosephusSurvivor(model);
                    //----------------Act----------------
                    let actual = josephusSurvivor.getSurvivor(element.input, element.step);

                    //----------------Assert-------------
                    expect(actual).toBe(element.expected);

                })
            })
    })

    describe("Given certain number of people in a circle and you step 2 time before eliminating", function () {
        [{ input: 4, step: 2, expected: 1 },
        { input: 14, step: 2, expected: 13 },
        { input: 50, step: 2, expected: 37 }]
            .forEach(function (element) {
                it("should return first person as survivor", function () {
                    //----------------Arrange------------
                    let model = new ArrayOfPeople();
                    let josephusSurvivor = new JosephusSurvivor(model);
                    //----------------Act----------------
                    let actual = josephusSurvivor.getSurvivor(element.input, element.step);

                    //----------------Assert-------------
                    expect(actual).toBe(element.expected);

                })
            })
    })

    describe("Given certain number of people in a circle and you step 1 time before eliminating", function () {
        [{ input: 1, step: 3, expected: 1 },
        { input: 1, step: 50, expected: 1 },
        { input: 1, step: 100, expected: 1 }]
            .forEach(function (element) {
                it("should return first person as survivor", function () {
                    //----------------Arrange------------
                    let model = new ArrayOfPeople();
                    let josephusSurvivor = new JosephusSurvivor(model);
                    //----------------Act----------------
                    let actual = josephusSurvivor.getSurvivor(element.input, element.step);

                    //----------------Assert-------------
                    expect(actual).toBe(element.expected);

                })
            })
    })

    describe("Given certain number of people in a circle and you step n number of times before eliminating", function () {
        [{ input: 50, step: 3, expected: 11 },
        { input: 100, step: 5, expected: 47 },
        { input: 500, step: 19, expected: 328 }]
            .forEach(function (element) {
                it("should return first person as survivor", function () {
                    //----------------Arrange------------
                    let model = new ArrayOfPeople();
                    let josephusSurvivor = new JosephusSurvivor(model);
                    //----------------Act----------------
                    let actual = josephusSurvivor.getSurvivor(element.input, element.step);

                    //----------------Assert-------------
                    expect(actual).toBe(element.expected);

                })
            })
    })
})
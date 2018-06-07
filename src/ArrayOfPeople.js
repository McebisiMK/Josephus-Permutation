function ArrayOfPeople(){

    GetPeople = function (number) {
        let people = []
        for (let index = 0; index < number; index++) {
            people[index] = index + 1
        }
        return people
    }

    return {
        GetPeople : GetPeople
    }
}
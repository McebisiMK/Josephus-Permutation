function JosephusSurvivor(arrayOfPeople) {

    getSurvivor = function (numberOfPeople, step) {
        
        let people = arrayOfPeople.GetPeople(numberOfPeople);
        let index;
        let count = 1;
        for (index = 0; index < people.length; index++) {
            if (CanEliminate(count, step)) {
                people.splice(index, 1)
                count = 0;
                index--
            }
            if (AtLastIndexAndStillPeopleToEliminate(index, people)) {
                index = -1
            }
            if (Survivor(people)) {
                return people[0]
            }
            count += 1
        }
    }

    function Survivor(people) {
        return people.length == 1;
    }

    function AtLastIndexAndStillPeopleToEliminate(index, people) {
        return (index == people.length - 1) && people.length != 1;
    }

    function CanEliminate(count, step) {
        return count == step;
    }

    return {
        getSurvivor: getSurvivor
    }

}
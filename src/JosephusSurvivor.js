function JosephusSurvivor() {

    getSurvivor = function (numberOfPeople, step) {
        if(step==0){
            return "Step can not be zero"
        }
        let arrayOfPeople = new ArrayOfPeople();
        let people = arrayOfPeople.GetPeople(numberOfPeople);
        let index;
        let count = 1;
        for (index = 0; index < people.length; index++) {
            if (CanEliminate(count, step)) {
                count = 0;
                people.splice(index, 1)
                index--
            }
            if (AtLastIndexAndStillPeopleToEliminate(index, people)) {
                index = 0
                index--
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
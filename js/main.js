(() => {
    // make an AJAX request using FETCH API
    fetch('./data/classData.json')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            
            courseContent(data)
            //handleData
            // here's where you would call the function that puts the pieces on the page 
        })
    .catch((err) => {
        handleFetchError()
    })

    function handleFetchError() {
    courseCode = document.getElementById("courseCode")
    teachName = document.getElementById("teachName")
    courseTimes = document.getElementById("courseTimes")
    courseCode.innerHTML = "Fetch Failed"
    teachName.innerHTML = "Fetch Failed"
    courseTimes.innerHTML = "Fetch Failed"
    }
    
    function courseContent(data) {
    courseCode = document.getElementById("courseCode")
    teachName = document.getElementById("teachName")
    courseTimes = document.getElementById("courseTimes")
    courseCode.innerHTML = data["coursename"] + "-" + data["coursecode"]
    teachName.innerHTML = "Professor - " + data["profname"]
    courseTimes.innerHTML = data["classtime"][0] + " - " + data["classtime"][1]
    }

})();
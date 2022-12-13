new Vue({
    el: "#app",
    data: {
        columns: [
            "Index",
            "Last Name",
            "First Name",
            "Age",
            "Job",
            "Address",
            "Actions "
        ],
        persons: [{
                lname: "ADIASSA",
                fname: "Ethiel",
                age: 20,
                job: "Web Developer",
                address: "Lome-Togo"
            },
            {
                lname: "ADUFU",
                fname: "Patrick",
                age: 20,
                job: "Banker",
                address: "Senegal-Dakar"
            },
            {
                lname: "MOUTON",
                fname: "John",
                age: 28,
                job: "Scientist",
                address: "New-York/USA"
            },
            {
                lname: "SMITH",
                fname: "Luther",
                age: 18,
                job: "Pilot",
                address: "London/GB"
            },
            {
                lname: "WALTER",
                fname: "Ramses Peter",
                age: 38,
                job: "Doctor",
                address: "Paris/France"
            },
            {
                lname: "GEORGES",
                fname: "Luther",
                age: 45,
                job: "Musician",
                address: "Vienne"
            },
            {
                lname: "MICHAEL",
                fname: "Daven",
                age: 27,
                job: "Boxer",
                address: "Pekin/China"
            }
        ],
        input: {
            lname: "",
            fname: "",
            age: 0,
            job: "",
            address: ""
        },
        editIndex: 0,
        editInput: {
            lname: "",
            fname: "",
            age: 0,
            job: "",
            address: ""
        }
    },
    methods: {
        //function to add data to table
        add: function() {
            this.persons.push({
                lname: this.input.lname,
                fname: this.input.fname,
                age: this.input.age,
                job: this.input.job,
                address: this.input.address
            });

            for (var key in this.input) {
                this.input[key] = "";
            }
            this.persons.sort(ordonner);
            this.$refs.lname.focus();
        },
        //function to handle data edition
        edit: function(index) {
            this.editInput.lname = this.persons[index].lname;
            this.editInput.fname = this.persons[index].fname;
            this.editInput.age = this.persons[index].age;
            this.editInput.job = this.persons[index].job;
            this.editInput.address = this.persons[index].address;

            this.editIndex = index;
            $(".modal").modal();
        },
        //function to update data
        update: function() {
            this.persons.splice(this.editIndex, 1);
            this.persons.push({
                lname: this.editInput.lname,
                fname: this.editInput.fname,
                age: this.editInput.age,
                job: this.editInput.job,
                address: this.editInput.address
            });
            for (var key in this.editInput) {
                this.editInput[key] = "";
            }
            $(".modal").modal('hide');
        },
        //function to defintely delete data
        deletePerson: function(index) {
            this.persons.splice(index, 1);
        }
    }
});
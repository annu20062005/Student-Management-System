 var table=document.getElementById("details")
        function save(){
        var row=document.createElement("tr")
        var td1=document.createElement("td")
        var name=document.getElementById("name")
        td1.textContent=name.value
        row.append(td1)
        var td2=document.createElement("td")
        var age=document.getElementById("age")
        td2.textContent=age.value
        row.append(td2)
        var td3=document.createElement("td")
        var male=document.getElementById("ae")
        var female=document.getElementById("io")
        var gender
        if(male.checked){
            gender="male"
        }
        else{
            gender="female"
        }
        td3.textContent=gender
        row.append(td3)
        var td4=document.createElement("td")
        var course=document.getElementById("course")
        td4.textContent=course.value
        row.append(td4)
        var td5=document.createElement("td")
        var email=document.getElementById("mail")
        td5.textContent=email.value
        row.append(td5)
        var td6=document.createElement("td")
        var button=document.createElement("button")
        button.textContent="Delete"
        button.id="deleteBtn"
        button.onclick=deleteItem
        td6.append(button)
        row.append(td6)
        table.append(row)
    }

    function deleteItem(event){
        event.target.parentElement.parentElement.remove()
    }
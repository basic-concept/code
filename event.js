var list  = document.getElementById("myLinks")

EventUtil.addHandler(list,"click",function(event){
	event = EventUtil.getEvent(event);
	var target = EventUtil.getTarget(event);

	switch(target.id){
		case "doSomething":
		    document.title = "I changed the document's title";
		    break;

		case "goSomething":
            document.href = "http://www.wrox.com";
            break;

        case "sayHi":
            alert("hi");
            break;
	}
})
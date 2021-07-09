
        var el = document.getElementById("example1");
        var state = [];
        var capital = [];
        var statesong = [];
        var statetree = [];
        var stateflower = [];
        var statebird = [];




        for (let x in usa) {



            state.push(usa[x].State);
            capital.push(usa[x].capital);
            statesong.push(usa[x].stateSong);
            statetree.push(usa[x].stateTree);
            stateflower.push(usa[x].stateFlower);
            statebird.push(usa[x].stateBird);



        }
       
       

for (var i = 0; i <50; i++){
     
    var tb=document.createElement('tbody');
  
    el.appendChild(tb);
    var tr = document.createElement('tr');   
     tb.appendChild(tr);
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');
    var td6 = document.createElement('td');
    

    var s = document.createTextNode(state[i]);
    var c = document.createTextNode(capital[i]);
    var sg=document.createTextNode( statesong[i]);
    var b=document.createTextNode(statebird[i]);
    var f=document.createTextNode(stateflower[i]);
    var t=document.createTextNode(statetree[i]);

    td1.appendChild(s);
    td2.appendChild(c);
    td3.appendChild(sg);
    td4.appendChild(b);
    td5.appendChild(f);
    td6.appendChild(t);

 
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
   
  
    

}


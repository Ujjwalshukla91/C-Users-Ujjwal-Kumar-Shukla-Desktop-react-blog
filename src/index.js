import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

ReactDom.render(
    <App />,
    document.getElementById('root')
);


/* class Friend{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
    speak(){
        console.log('Hello!','My name is', this.name ,'and my age is', this.age, 'year old');
    }
}
const frnd2 =new Friend('ujjwal', 29);
frnd2.speak();
console.log(frnd2);

class Friend2 extends Friend{
    constructor(name, age, color, state){
        super(name, age);
        this.color=color;
        this.state=state;
    }
    roar(){
        console.log('hello!','my hair color is',this.color, 'and my state is', this.state);
    }
}
const animal1 =new Friend2("ujjwal", 29, 'black','bihar');
animal1.speak();
animal1.roar();
console.log(animal1); */






/* class Animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    speak(){
        console.log('i am',this.name, 'and I am',this.age, 'year old');
    }
}

const animal1 =new Animal('simba',3);
animal1.speak();
console.log(animal1);

class Lion extends Animal{
    constructor(name,age,furColor,speed){
        super(name,age);
        this.furColor =furColor;
        this.speed =speed;
    }
    roar(){
        console.log(
            'Rooor! Ihave',
            this.furColor,
            'fur, and I can run',
            this.speed,
            'miles an hour!'
        );
    }
}
const lion1 = new Lion('Mufassa', 20, 'golden',25);
lion1.speak();
lion1.roar();
console.log(lion1); */


/* class Family{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    speak(){
        console.log('hello! my name is', this.name, 'and my age is', this.age);
    }
}



const family1 = new Family('Manoj', 33);
family1.speak();
console.log(family1);

class Member extends Family{
    constructor(name,age,color,weight){
        super(name,age);
        this.color=color;
        this.weight=weight;
    }
    hair(){
        console.log('My hair color', this.color ,'and my weight is', this.weight);
    }
}

const family2 = new Member('ujjwal', 29 , 'Black', 100);
family2.speak();
family2.hair();
console.log(family2);
 */


/* import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import App from './App';

ReactDom.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
); */

/* class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    speak(){
        document.write(' I am ' , this.name , ' I am ', this.age , ' year old ');
    }
}

const animal1 =new Animal('tiger',3);
animal1.speak(); */

/* class Name {
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
    nameage(){
        document.write(' My name is ' , this.name , ' and My age is ' , this.age);
    }

}
 const fname= new Name("ujjwal kr shukla", 29);
 fname.nameage();

 class Lion extends Name{
     constructor(name, age, furcolor,speed){
        super(name, age);
        this.furcolor=furcolor;
        this.speed=speed;
     }

     roar(){
         document.write(
             ' ROOOAR! I HAVE ',
             this.furcolor , ' fur , and I can run ' ,
             this.speed,' miles an hour! '
            );
        }
    }

    const lion1=new Lion('Manoj', 33, 'monu',29);
    lion1.nameage();
    lion1.roar();
    console.log(lion1);
 */
    /* class Fullname{
        constructor(name,age){
            this.name=name;
            this.age=age;
        }
        speak(){
            document.write('hello', this.name , 'My age is ', this.age);
        }        
    }
    class Title extends Fullname{
        constructor(full) {
            super();
            this.full=full;
            
        }
        finalname(){
            document.write('hello',this.full);
        }
    }
    const middle=new Title("shukla");
     const name=new Fullname("Ujjwal",29);
     middle.finalname();
    name.Fullname(); */





/* import React from 'react';
import ReactDom from 'react-dom';

ReactDom.render(
    [
        <h1> Hello ujjwal</h1>,
        <p> My first react </p>,
        <h2> ujjwal </h2>,
    ],
    document.getElementById('root'));
 */

    /* import React from 'react';
    import ReactDom from 'react-dom';

    ReactDom.render(
        <div>
        <h1> ujjwal React page</h1>
        <p>This is netflix page</p>
        <ol>
            <li>Friends</li>
            <li>Friends</li>
            <li>Friends</li>
            <li>Friends</li>
            <li>Friends</li>
        </ol>
        </div>,
        document.getElementById("root")
    ); */

    /* import React from 'react';
    import ReactDom from 'react-dom';

    var fname="ujjwal kr shukla";

    ReactDom.render(
        <>
            <h1>My name is {fname}</h1>
            <p>please add this number {3+3} </p>
        </>,
        document.getElementById("root")
    ); */

   /*  import React from 'react';
    import ReactDom from 'react-dom';

    var fname ="Ujjwal";
    var lname ="Shukla";
    var currDate=new Date().toLocaleDateString();
    var currTime=new Date().toLocaleTimeString();

    ReactDom.render(
        <>
            <h1>{`Hello, my name is ${fname} ${lname}`} </h1>
            <p>Today date is = {currDate} </p>
            <p>current time is = {currTime} </p>
        </>,
        document.getElementById("root")
    ); */

   /*  import React from 'react';
    import ReactDom from 'react-dom';

    var name ="Ujjwal Kr Shukla";
    var img1 ="https://picsum.photos/350/300";
    var img2 ="https://picsum.photos/360/300";
    var img3 ="https://picsum.photos/370/300";

    ReactDom.render(
        <>
            <h1 contentEditable="true">My name is {name} </h1>
            <img src={img1} alt="randomImages"  />
            <img src={img2} alt="randomImages"  />
            <a>
            <img src={img3} alt="randomImages"  />
            </a>
        </>,
            document.getElementById("root")
    );
 */

    /* import React from 'react';
    import ReactDom from 'react-dom';
    import "./index.css";

    var fname ="Ujjwal Kr Shukla";

    var img1 = "https://picsum.photos/290/300";
    var img2 = "https://picsum.photos/280/300";
    var img3 = "https://picsum.photos/270/300";

    ReactDom.render(

        <>
            <h1 className="heading" contentEditable="true">Hello {fname}
                <ul>
                    <li>home</li>
                    <li>home</li>
                    <li>home</li>
                    <li>home</li>
                    <li>home</li>
                </ul>
             </h1>
            
            <div className="imgepic">
                <img class="pic" src={img1} alt="randomImages"/>
                <p class="para"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam eleifend neque non consectetur mattis. Pellentesque quis blandit magna,
                quis imperdiet risus. Nulla a pulvinar odio.</p>
            </div>
            <div className="imgepic">
                <img class="pic" src={img2} alt="randomImages"/>
                <p class="para"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam eleifend neque non consectetur mattis. Pellentesque quis blandit magna,
                quis imperdiet risus. Nulla a pulvinar odio.</p>
            </div>
            <div className="imgepic">
                <img class="pic" src={img3} alt="randomImages"/>
                <p class="para"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam eleifend neque non consectetur mattis. Pellentesque quis blandit magna,
                quis imperdiet risus. Nulla a pulvinar odio.</p>
            </div>
            <div className="imgepic">
                <img class="pic" src={img1} alt="randomImages"/>
                <p class="para"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam eleifend neque non consectetur mattis. Pellentesque quis blandit magna,
                quis imperdiet risus. Nulla a pulvinar odio.</p>
            </div>
            <div className="imgepic">
                <img class="pic" src={img2} alt="randomImages"/>
                <p class="para"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam eleifend neque non consectetur mattis. Pellentesque quis blandit magna,
                quis imperdiet risus. Nulla a pulvinar odio.</p>
            </div>
            <div className="imgepic">
                <img class="pic" src={img3} alt="randomImages"/>
                <p class="para"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam eleifend neque non consectetur mattis. Pellentesque quis blandit magna,
                quis imperdiet risus. Nulla a pulvinar odio.</p>
            </div>
        </>,
            document.getElementById("root")

    ); */

   /*  import React from 'react';
    import ReactDom from 'react-dom';
    function fullName(user){
        return user.firstName + ' ' + user.lastName;
      }
      
      const user = {
       firstName : "Ujjwal",
       lastName  : "Shukla",
      };
      
      const element =
        <h1>
          Hello, {fullName(user)}
        </h1>;

      ReactDom.render(
          element,
         document.getElementById("root")
         ); */

        /*  import React from 'react';
         import ReactDom from 'react-dom';

         function cricketTeam(players){
            return players.firstName + ' ' + players.lastname;
         }
         const players ={
             firstName :"Rohit",
             lastname : "Sharma",
         };
         const element =<h1>Hello,{cricketTeam(players)}</h1>;

         ReactDom.render(element,
            document.getElementById("root")
            );
             */

          /*   import React from 'react';
            import ReactDom from 'react-dom';
            import "./index.css";

            const name="ujjwal kr shukla";

            ReactDom.render(
                <>
                    <h1>Hello, {name}</h1>
                </>,
                document.getElementById("root")
            ); */
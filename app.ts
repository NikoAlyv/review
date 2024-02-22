//TODO:Task
//!2
interface IPersonalProfile{
    firstName:string,
    lastName:string,
    age:number,
    favoriteLanguage:string,
    contactInfo:{
        email:string,
        phoneNumber:string
    }
}
const personalProfile:IPersonalProfile={
    firstName:"Nihad",
    lastName:"Aliyev",
    age:19,
    favoriteLanguage:"JavaScript",
    contactInfo:{
        email:"enihad801@gmail.com",
        phoneNumber:"0775329607"

    }

}

//!1
personalProfile.age=20;
console.log(personalProfile["age"]);

//!3
personalProfile["occupation"] = "Developer";
personalProfile['contactInfo']['address'] = "Astara";
console.log(personalProfile);


!4
console.log(personalProfile.firstName);
console.log(personalProfile["lastName"]);
console.log(personalProfile.age);
console.log(personalProfile.favoriteLanguage);
console.log(personalProfile["contactInfo"].email);
console.log(personalProfile["contactInfo"].phoneNumber);

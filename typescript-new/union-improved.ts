interface PetrolCar {
    engine: string;
    autoDrive: boolean;
}

interface ElectricCar {
    battery: string;
}

type Car = PetrolCar | ElectricCar;


const myNewCar : PetrolCar | ElectricCar= {
    engine: "tiny",
    battery: true,
    autoDrive: true
}



type Point = {
    x: number;
    y: number;
  };
  
  type Label = {
    name: string;
  };
  
  const thing: Point | Label = {
    x: 0,
    name: "45" // uh-oh!
  };
  
  thing
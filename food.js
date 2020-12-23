class Food{
    constructor(){
        this.image = loadImage("Milk.png");
        this.lastFed;
        this.foodStock = 0;
    }

    
    updateFoodStock(foodStock){
       this.foodStock = foodStock;
    }

    deductFood(){
        if(this.foodStock>0){
            this.foodStock = this.foodStock - 1;
        }
    }

    getFedTime(){
        this.lastFed = lastFed;
    }

    getFoodStock(){
        return this.foodStock;
    }

    display(){
        var x = 80, y = 150;
        imageMode(CENTER);
        image(this.image, x, y, 80, 90);

        if(foodStock != 0){
            for(var i = 0; i < foodStock; i++){
                if(i%10 === 0){
                    x = 80;
                    y = y + 50;
                }

                image(this.image, x, y, 50, 50);
                x = x + 30;
            }
        }
    }
}
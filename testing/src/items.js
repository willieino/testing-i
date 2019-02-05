import React from 'react';

class Items extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        { id: 1, name: 'bronze', durability: 50, enhancement: 4, type: 'weapon' },
        { id: 2, name: 'gauntlet', durability: 50, enhancement: 9, type: 'armor'},
        { id: 3, name: 'staff', durability: 50, enhancement: 2, type: 'weapon'}
      ],
  }
  }
  enhance = item => {
    item.enhancement++;
    //this.forceUpdate();
    console.log("items:", items);
    console.log("item.enhancement:", item.enhancement);
    
    this.setState(() => ({ items: items })); 
  }

  render() {

    return (
      <>
        <h3 data-testid="title">Items</h3>
        {this.state.items.map(i => (
          <div key={i.id}>
            <div data-testid="item">{i.name}</div>
            <div data-testid="enhancement">{i.enhancement}</div>
            <button onClick={() => { this.enhance(i) }}>Enhance</button>
          </div>
        ))}
      </>
    );
  };
}
export default Items;

//*********  ITEMS *****************/
// The item's type can be weapon or armor.
// The maximum durability of an item is 100.
// The durability of an item starts at 100.
// The enhancement level of an item starts at 0 and can reach a maximum of PEN (20).
// The durability of an item cannot be less than 20 when the item's enhancement level is 
//     between +0 and +14
// The durability of an item cannot be less than 0 when the item's enhancement level is 
//      between +15 and TET (+19).

/* const sword = {
    name: "bronze",
    durability: 50,
    enhancement: "+7",
    type: "weapon"
};

const staff = {
    name: "power",
    durability: 70,
    enhancement: "+10",
    type: "weapon"
};

const greaves = {
    name: "iron",
    durability: 50,
    enhancement: "+15",
    type: "armor"
};

const shield = {
    name: "holy",
    durability: 50,
    enhancement: "+7",
    type: "armor"
};
 */

//success
// add 1 to the enhancment level
// 


//enhancement
//
// The enhancement level of an item starts at 0.
// The maximun enhancement possible is PEN (20).
// Enhacing an armor up to 5 cannot fail.
// Enhacing a weapon up to 7 cannot fail.
// Enhancement level is displayed as a string 
//     with a plus sign ( + ) before the number 
//     for levels 1 to 15.
// Enhancement level of 0 is not displayed.
// when an item is enhanced, the name should 
//     be modified to include the enhancement level 
//     between square brackets before the item's name
//     [+VII] Elven Sword or [DUO] Elven Sword.
// From +0 to +15 the enhacement is displayed using Arabic Numerals.
//     [+I] Elven Sword


// when enhancment fails
//
// 
/* const greaterThanFifty = num => {
    if (num > 50) {
      return true;
    }
    return false;
  };

const getBiggest = (x, y) => {
    if (x > y) {
      return x;
    } else if (x === y) {
      return y;
    }
    return y;
  };

const isInRange = num => {
    if (num < 50 && num > 20) {
      return true;
    }
    return false;
  };

const incrementByOne = arr => {
    for (let i = 0; i < arr.length; i++) {
      arr[i]++;
    }
    return arr;
  }; */

/* module.exports = {
    getBiggest,
    greeting,
    isTenOrFive,
    isInRange,
    isInteger,
    fizzBuzz,
    isPrime,
    returnFirst,
    returnLast,
    getArrayLength,
    incrementByOne,
    addItemToArray,
    addItemToFront,
    wordsToSentence,
    contains,
    addNumbers,
    averageTestScore,
    largestNumber
  }; */
  
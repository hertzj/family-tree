class FamilyTree {
    constructor (elder) {
      if (typeof elder !== 'string') {
        throw "that's not right!"
      }
      this.value = elder;
      this.children = [];
    }
  
    insert(kid) {
      let child = new FamilyTree(kid)
      this.children.push(child)
    }
  
    familySize() {
      if (this.children.length === 0) {
        return 1
      }
      else return this.children.length + 1
    }
  
    findMember(relative) {
      if (relative === this.value) {
        return this;
      }
      else {
        for (let i = 0; i < this.children.length; i++) {
          const famMember = this.children[i].value;
          if (famMember === relative) {
            return this.children[i];
          }
        }
      }
      return undefined
    }
  
    log() {
      const fam =[`-- ${this.value}`]
  
      this.children.forEach(child => {
        const nameAndPos = `---- ${child.value}`
        fam.push(nameAndPos);
        if (child.children.length > 0) {
          child.children.forEach(grandChild => {
            const nameAndPos = `------ ${grandChild.value}`
            fam.push(nameAndPos);
          })
        }
      })
  
      return fam.join('\n')
    }
}

const grandKidsCheck = (tree) => {
    if (tree.children.length === 0) {
        return false;
    }
    else {
        const children = tree.children;
        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            if (child.children.length > 0) {
                return true;
            }
        }
    }
    return false;
}


const button = document.querySelector("button");
const generations = document.getElementById('generations');
// const firstGen = document.querySelector('#firstGen');
// const secondGen = document.querySelector('#secondGen');
// const thirdGen = document.querySelector('#thirdGen');

// const holderOne = document.getElementById('genHolderOne')
// const holderTwo = document.getElementById('genHolderTwo')
// const holderThree = document.getElementById('genHolderThree')

    
// eslint-disable-next-line max-statements
button.addEventListener('click', ev => {
    ev.preventDefault();
    const name = document.querySelector('#name').value
    const age = document.querySelector('#age').value
    let parent = document.querySelector('.parent');

    document.querySelector('#name').value = '';
    document.querySelector('#age').value = '';

    if (!parent) {
        const holderOne = document.createElement('div');
        holderOne.id = 'genHolderOne';
        holderOne.innerHTML = '<h2>Generation 1</h2>'
        generations.appendChild(holderOne);
        
        const firstGen = document.createElement('div');
        firstGen.classList.add('generation')
        firstGen.id = 'firstGen';
        holderOne.appendChild(firstGen)
        
        family = new FamilyTree(name);
        const famMemDiv = document.createElement('div');
        famMemDiv.classList.add('familyMember');
        famMemDiv.dataset.generation = 'firstGen';
        famMemDiv.dataset.name = name;
    
        const famMemberIcon = document.createElement('div');
        famMemberIcon.classList.add('familyMemberIcon')
        famMemberIcon.addEventListener('click', ev => {
            let current = document.querySelector('.selected')
            if (!current || current === famMemberIcon) {
                famMemberIcon.classList.toggle('selected');
                famMemDiv.classList.toggle('parent');
            }
            else {
                famMemberIcon.classList.toggle('selected');
                famMemDiv.classList.toggle('parent');
                current.classList.toggle('selected');
                let currentParent = current.parentElement
                currentParent.classList.toggle('parent')
            }
            
        })
    
        const famMemberInfo = document.createElement('div');
        famMemberInfo.innerHTML = `<h3>${name}</h3><p>${age} yrs</p>`;
    
        famMemDiv.appendChild(famMemberIcon);
        famMemDiv.appendChild(famMemberInfo);
    
        firstGen.appendChild(famMemDiv);
    } 

    else if (parent.dataset.generation === 'firstGen') {
        if (family.children.length === 0) {
            const holderTwo = document.createElement('div');
            holderTwo.id = 'genHolderTwo';
            holderTwo.innerHTML = '<h2>Generation 2</h2>';
            generations.appendChild(holderTwo);
            
            const secondGen = document.createElement('div');
            secondGen.classList.add('generation');
            secondGen.id = 'secondGen';
            holderTwo.appendChild(secondGen);
        }

        const secondGen = document.getElementById('secondGen');
        
        family.insert(name)
        const famMemDiv = document.createElement('div');
        famMemDiv.classList.add('familyMember');
        famMemDiv.dataset.generation = 'secondGen'
        famMemDiv.dataset.name = name;
    
        const famMemberIcon = document.createElement('div');
        famMemberIcon.classList.add('familyMemberIcon')
        famMemberIcon.addEventListener('click', ev => {
            let current = document.querySelector('.selected')
            if (!current || current === famMemberIcon) {
                famMemberIcon.classList.toggle('selected');
                famMemDiv.classList.toggle('parent');
            }
            else {
                famMemberIcon.classList.toggle('selected');
                famMemDiv.classList.toggle('parent');
                current.classList.toggle('selected');
                let currentParent = current.parentElement
                currentParent.classList.toggle('parent')
            }
            
        })
    
        const famMemberInfo = document.createElement('div');
        famMemberInfo.innerHTML = `<h3>${name}</h3><p>${age} yrs</p>`;
    
        famMemDiv.appendChild(famMemberIcon);
        famMemDiv.appendChild(famMemberInfo);
    
        secondGen.appendChild(famMemDiv);
    }

    else if (parent.dataset.generation === 'secondGen') {
        if (!grandKidsCheck(family)) {
            const holderThree = document.createElement('div');
            holderThree.id = 'genHolderThree';
            holderThree.innerHTML = '<h2>Generation 3</h2>';
            generations.appendChild(holderThree);

            const thirdGen = document.createElement('div');
            thirdGen.classList.add('generation');
            thirdGen.id = 'thirdGen';
            holderThree.appendChild(thirdGen);

        }

        const thirdGen = document.getElementById('thirdGen')

        const famMemDiv = document.createElement('div');
        famMemDiv.classList.add('familyMember');
        famMemDiv.dataset.generation = 'thirdGen';
        famMemDiv.dataset.name = name;
    
        const famMemberIcon = document.createElement('div');
        famMemberIcon.classList.add('familyMemberIcon')
        famMemberIcon.addEventListener('click', ev => {
            let current = document.querySelector('.selected')
            if (!current || current === famMemberIcon) {
                famMemberIcon.classList.toggle('selected');
                famMemDiv.classList.toggle('parent');
            }
            else {
                famMemberIcon.classList.toggle('selected');
                famMemDiv.classList.toggle('parent');
                current.classList.toggle('selected');
                let currentParent = current.parentElement
                currentParent.classList.toggle('parent')
            }
            
        })
    
        const famMemberInfo = document.createElement('div');
        famMemberInfo.innerHTML = `<h3>${name}</h3><p>${age} yrs</p>`;
    
        famMemDiv.appendChild(famMemberIcon);
        famMemDiv.appendChild(famMemberInfo);
    
        thirdGen.appendChild(famMemDiv);
    }

})
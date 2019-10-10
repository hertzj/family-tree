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

module.exports = FamilyTree;

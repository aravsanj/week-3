class Node {
  constructor(value) {
    this.value = value;
    this.isEndOfWord = false;
    this.children = new Array(26);
  }
}

class Trie {
  constructor() {
    this.root = new Node("");
  }

  insert(word) {
    let current = this.root;

    for (let i = 0; i < word.length; i++) {
      let charIndex = word.charCodeAt(i) - 97;

      if (!current.children[charIndex]) {
        current.children[charIndex] = new Node(word[i]);
      }

      current = current.children[charIndex];
    }

    current.isEndOfWord = true;
  }

  _getNode(word) {
    if (word === "") return this.root;

    let current = this.root;

    for (let i = 0; i < word.length; i++) {
      let charIndex = word.charCodeAt(i) - 97;

      if (!current.children[charIndex]) return null;

      current = current.children[charIndex];
    }

    return current;
  }

  startsWith(word) {
    const node = this._getNode(word);

    return !!node;
  }

  search(word) {
    const node = this._getNode(word);

    return (node && node.isEndOfWord)
  }

  allWords(starting = '') {
        let startNode = this._getNode(starting);

        let words = [];

        this._findAllWords(startNode, starting, words);

        return words;

  }

  _findAllWords(node, prefix, words) {
    if(node) {
        if(node.isEndOfWord) {
            words.push(prefix);
        }
    }

    for (let i = 0; i < node.children.length; i++) {
        this._findAllWords(node.children[i], prefix + node.children[i]?.value, words);
    }
  }
}


const trie = new Trie();

trie.insert("hello");
trie.insert("hi");
trie.insert("how");
trie.insert("stomach");
trie.insert("sleep");

console.log(trie.allWords());
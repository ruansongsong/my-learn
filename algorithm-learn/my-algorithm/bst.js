// 声明二叉树节点
function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
  this.show = show;
}

// 返回节点数据
function show() {
  return this.data;
}

// 二叉树定义
function BST() {
  this.root = null;
  this.insert = insert;
  this.inOrder = inOrder;
  this.getMin = getMin;
  this.getMax = getMax;
  this.find = find;
  this.remove = remove;
}

// 定义插入方法
function insert(data) {
  var newNode = new Node(data, null, null);
  var current, parent;
  if(this.root === null) {
    this.root = newNode;
  } else {
      current = this.root;
      while(true) {
        // 注意这里要保存它的父节点
        parent = current;
        if(data < current.data) {
          current = current.left;
          if(current == null) {
            parent.left = newNode;
            break;
          }
        } else {
          current = current.right;
          if(current == null) {
            parent.right = newNode;
            break;
          }
        }
      }
  }
}

// 中序遍历
function inOrder(node) {
  if(node !== null) {
    inOrder(node.left);
    console.log(node.show());
    inOrder(node.right);
  }
}

// 前序遍历
function preOrder(node) {
  if(node !== null) {
    console.log(node.data);
    preOrder(node.left);
    preOrder(node.right);
  }
}

// 后序遍历
function postOrder(node) {
  if(node !== null) {
    postOrder(node.left);
    postOrder(node.right);
    console.log(node.data);
  }
}

// 获取二叉树上最小的节点
function getMin() {
  var current = this.root;
  while(current.left !== null) {
    current = current.left;
  }
  return current.data;
}

// 获取二叉树上最大的节点，右节点
function getMax() {
  var current = this.root;
  while(current.right !== null) {
    current = current.right;
  }
  return current.data;
}

// 查找二叉树上的某个值
function find(data) {
  var current = this.root;
  while(current != null) {
    if(data == current.data) {
      return current;
    } else if(data < current.data) {
      current = current.left;
    } else {
      current = current.right;
    }
  }
  return null;
}

// 删除二叉树上的节点
function remove(data) {
  var root = removeNode(this.root, data);
}
// 获取右子树上的最小值
function getSmallest(node) {
  var current = node;
  while(current.left !== null) {
    current = current.left;
  }
  return current;
}
function removeNode(node, data) {
  if(node == null) {
    return null;
  }
  if(data == node.data){
    if(node.left == null && node.right == null) {
      return null;
    }
    if(node.left == null) {
      return node.right;
    }
    if(node.right == null) {
      return node.left;
    }
    var tempNode = getSmallest(node.right);
    node.data = tempNode.data;
    // 递归删除节点
    node.right = removeNode(node.right, tempNode.data)
    return node;
  } else if(data < node.data) {
    node.left = removeNode(node.left, data);
    return node;
  } else {
    node.right = removeNode(node.right, data);
    return node;
  }
}
// 测试
var nums = new BST();
nums.insert(25);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
nums.insert(21);
nums.insert(24);
// inOrder(nums.root);
nums.remove(16);
preOrder(nums.root);
// postOrder(nums.root);
// console.log(nums.getMin());
// console.log(nums.getMax());
// console.log(nums.find(99));
// console.log(nums.find(46));

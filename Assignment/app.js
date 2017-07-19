import "babel-polyfill";
import {testConstant} from './components/constant'
import {testScoping} from './components/scoping'
import {testenhanced} from './components/enhanced_object'
import {printNames} from './components/arrow'
import {add, userFriends, printCapitalNames} from './components/extended_parameter'
import {testTemplate} from './components/template_liberal'
import {arrDestrcut, objDestruct} from './components/destruct'
import {getTotalCashInBank} from './components/classdemo'
import {getFibonacciNumeber} from './components/symbol'
import {getNextArmstrongNumber} from './components/iterator'
import {getArmstrongNumber} from './components/generator'
import {testChatRoom} from './components/chatroom'

//testConstant();
//testScoping();
//testenhanced();
//printNames();

//add(1,1);
//userFriends("a",["b","c"]);

//var names=["a","b","c","d","e"];
//printCapitalNames(...names);

//testTemplate();

//arrDestrcut();
//objDestruct();

//getTotalCashInBank();

//getFibonacciNumeber();
//getNextArmstrongNumber();
//getArmstrongNumber();

testChatRoom();
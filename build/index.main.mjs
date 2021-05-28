// Automatically generated with Reach 0.1.2
/* eslint-disable */
export const _version = '0.1.2';


export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };

export function _getViews(s) {
  const stdlib = s.reachStdlib;
  return {
    infos: {
      },
    views: {
      }
    };
  };

export async function Alice(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Tuple([ctc0]);
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 121));
  const ctc5 = stdlib.T_Tuple([ctc0, ctc2, ctc0, ctc2, ctc0, ctc0, ctc4]);
  const ctc6 = stdlib.T_Tuple([ctc0, ctc2, ctc0, ctc2, ctc0, ctc4]);
  const ctc7 = stdlib.T_Object({
    blockers: ctc4,
    catIndex: ctc0
    });
  const ctc8 = stdlib.T_Tuple([ctc0, ctc2, ctc0, ctc2, ctc7, ctc0]);
  const ctc9 = stdlib.T_Tuple([ctc0, ctc2, ctc0, ctc2, ctc7]);
  const ctc10 = stdlib.T_Null;
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Tuple([ctc0, ctc2, ctc0, ctc0]);
  const ctc13 = stdlib.T_Tuple([ctc0, ctc2, ctc0]);
  const ctc14 = stdlib.T_Tuple([ctc0, ctc0]);
  
  
  const v267 = await ctc.creationTime();
  const v266 = stdlib.protect(ctc0, interact.wager, null);
  
  
  
  const txn1 = await (ctc.sendrecv(1, 1, stdlib.checkedBigNumberify('./index.rsh:124:9:dot', stdlib.UInt_max, 0), [ctc0, ctc0], [v267, v266], [v266, []], [ctc0], true, true, false, (async (txn1) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc14, [stdlib.checkedBigNumberify('./index.rsh:124:9:dot', stdlib.UInt_max, 0), v267]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc1, [stdlib.checkedBigNumberify('./index.rsh:124:9:dot', stdlib.UInt_max, 0)]);
    const [v272] = txn1.data;
    const v275 = txn1.time;
    const v271 = txn1.from;
    
    sim_r.txns.push({
      amt: v272,
      kind: 'to',
      tok: undefined
      });
    sim_r.nextSt = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:126:15:after expr stmt semicolon', stdlib.UInt_max, 1), v271, v272, v275]);
    sim_r.nextSt_noTime = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('./index.rsh:126:15:after expr stmt semicolon', stdlib.UInt_max, 1), v271, v272]);
    sim_r.view = [ctc1, [stdlib.checkedBigNumberify('./index.rsh:126:15:after expr stmt semicolon', stdlib.UInt_max, 0)]];
    sim_r.isHalt = false;
    
    return sim_r;
    })));
  const [v272] = txn1.data;
  const v275 = txn1.time;
  const v271 = txn1.from;
  ;
  const txn2 = await (ctc.recv(2, 0, [], false, stdlib.checkedBigNumberify('./index.rsh:111:18:decimal', stdlib.UInt_max, 10)));
  if (txn2.didTimeout) {
    
    const txn3 = await (ctc.sendrecv(3, 0, stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 2), [ctc2, ctc0, ctc0], [v271, v272, v275], [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []], [], true, true, false, (async (txn3) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 1), v271, v272, v275]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 1), v271, v272]);
      const [] = txn3.data;
      const v565 = txn3.time;
      const v562 = txn3.from;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v564 = stdlib.addressEq(v271, v562);
      stdlib.assert(v564, {
        at: 'reach standard library:209:7:dot',
        fs: ['at ./index.rsh:131:41:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
        msg: 'sender correct',
        who: 'Alice'
        });
      sim_r.txns.push({
        amt: v272,
        kind: 'from',
        to: v271,
        tok: undefined
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined
        })
      sim_r.nextSt = stdlib.digest(ctc11, []);
      sim_r.nextSt_noTime = stdlib.digest(ctc11, []);
      sim_r.view = [ctc1, [stdlib.checkedBigNumberify('reach standard library:211:11:after expr stmt semicolon', stdlib.UInt_max, 0)]];
      sim_r.isHalt = true;
      
      return sim_r;
      })));
    const [] = txn3.data;
    const v565 = txn3.time;
    const v562 = txn3.from;
    ;
    const v564 = stdlib.addressEq(v271, v562);
    stdlib.assert(v564, {
      at: 'reach standard library:209:7:dot',
      fs: ['at ./index.rsh:131:41:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'sender correct',
      who: 'Alice'
      });
    ;
    stdlib.protect(ctc10, await interact.informTimeout(), {
      at: './index.rsh:120:33:application',
      fs: ['at ./index.rsh:119:13:application call to [unknown function] (defined at: ./index.rsh:119:25:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:118:32:function exp)', 'at ./index.rsh:131:41:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    }
  else {
    const [] = txn2.data;
    const v282 = txn2.time;
    const v279 = txn2.from;
    ;
    const v286 = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
    const v287 = {
      blockers: v286,
      catIndex: stdlib.checkedBigNumberify('./index.rsh:14:18:decimal', stdlib.UInt_max, 60)
      };
    let v285 = v287;
    let v580 = v282;
    
    while ((() => {
      let v292;
      const v293 = v285.catIndex;
      const v294 = stdlib.lt(v293, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
      const v295 = stdlib.ge(v293, stdlib.checkedBigNumberify('./index.rsh:25:28:application', stdlib.UInt_max, 110));
      const v296 = v294 ? true : v295;
      if (v296) {
        v292 = true;
        }
      else {
        const v298 = stdlib.mod(v293, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
        const v299 = stdlib.eq(v298, stdlib.checkedBigNumberify('./index.rsh:29:23:decimal', stdlib.UInt_max, 0));
        const v301 = stdlib.eq(v298, stdlib.checkedBigNumberify('./index.rsh:29:45:application', stdlib.UInt_max, 10));
        const v302 = v299 ? true : v301;
        if (v302) {
          v292 = true;
          }
        else {
          v292 = false;
          }
        }
      let v360;
      if (v292) {
        v360 = true;
        }
      else {
        let v306;
        if (v296) {
          v306 = true;
          }
        else {
          const v312 = stdlib.mod(v293, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
          const v313 = stdlib.eq(v312, stdlib.checkedBigNumberify('./index.rsh:29:23:decimal', stdlib.UInt_max, 0));
          const v315 = stdlib.eq(v312, stdlib.checkedBigNumberify('./index.rsh:29:45:application', stdlib.UInt_max, 10));
          const v316 = v313 ? true : v315;
          if (v316) {
            v306 = true;
            }
          else {
            v306 = false;
            }
          }
        const v320 = v306 ? false : true;
        stdlib.assert(v320, {
          at: './index.rsh:41:10:application',
          fs: ['at ./index.rsh:89:38:application call to "catBlocked" (defined at: ./index.rsh:40:25:function exp)', 'at ./index.rsh:137:24:application call to "gameOver" (defined at: ./index.rsh:88:1:function exp)'],
          msg: null,
          who: 'Alice'
          });
        const v322 = v285.blockers;
        const v324 = stdlib.sub(v293, stdlib.checkedBigNumberify('./index.rsh:45:36:decimal', stdlib.UInt_max, 1));
        const v326 = v322[v324];
        const v329 = stdlib.add(v293, stdlib.checkedBigNumberify('./index.rsh:45:68:decimal', stdlib.UInt_max, 1));
        const v331 = v322[v329];
        const v332 = v326 ? v331 : false;
        const v335 = stdlib.sub(v293, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
        const v337 = v322[v335];
        const v338 = v332 ? v337 : false;
        const v341 = stdlib.add(v293, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
        const v343 = v322[v341];
        const v344 = v338 ? v343 : false;
        const v348 = stdlib.add(v335, stdlib.checkedBigNumberify('./index.rsh:47:36:decimal', stdlib.UInt_max, 1));
        const v350 = v322[v348];
        const v351 = v344 ? v350 : false;
        const v355 = stdlib.sub(v341, stdlib.checkedBigNumberify('./index.rsh:47:75:decimal', stdlib.UInt_max, 1));
        const v357 = v322[v355];
        const v358 = v351 ? v357 : false;
        v360 = v358;
        }
      const v363 = v360 ? false : true;
      
      return v363;})()) {
      const v369 = stdlib.protect(ctc0, await interact.getMove(v285), {
        at: './index.rsh:54:36:application',
        fs: ['at ./index.rsh:141:43:application call to "getValidCatMove" (defined at: ./index.rsh:51:1:function exp)', 'at ./index.rsh:140:16:application call to [unknown function] (defined at: ./index.rsh:140:20:function exp)'],
        msg: 'getMove',
        who: 'Alice'
        });
      
      
      const txn3 = await (ctc.sendrecv(6, 1, stdlib.checkedBigNumberify('./index.rsh:142:12:dot', stdlib.UInt_max, 4), [ctc2, ctc0, ctc2, ctc7, ctc0, ctc0], [v271, v272, v279, v285, v580, v369], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc0], true, true, false, (async (txn3) => {
        const sim_r = { txns: [] };
        sim_r.prevSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:142:12:dot', stdlib.UInt_max, 4), v271, v272, v279, v285, v580]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:142:12:dot', stdlib.UInt_max, 4), v271, v272, v279, v285]);
        const [v372] = txn3.data;
        const v375 = txn3.time;
        const v371 = txn3.from;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v374 = stdlib.addressEq(v271, v371);
        stdlib.assert(v374, {
          at: './index.rsh:142:12:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        let v378;
        const v379 = v285.catIndex;
        const v380 = stdlib.lt(v379, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
        const v381 = stdlib.ge(v379, stdlib.checkedBigNumberify('./index.rsh:25:28:application', stdlib.UInt_max, 110));
        const v382 = v380 ? true : v381;
        if (v382) {
          v378 = true;
          }
        else {
          const v384 = stdlib.mod(v379, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
          const v385 = stdlib.eq(v384, stdlib.checkedBigNumberify('./index.rsh:29:23:decimal', stdlib.UInt_max, 0));
          const v387 = stdlib.eq(v384, stdlib.checkedBigNumberify('./index.rsh:29:45:application', stdlib.UInt_max, 10));
          const v388 = v385 ? true : v387;
          if (v388) {
            v378 = true;
            }
          else {
            v378 = false;
            }
          }
        const v392 = v378 ? false : true;
        stdlib.assert(v392, {
          at: './index.rsh:41:10:application',
          fs: ['at ./index.rsh:68:22:application call to "catBlocked" (defined at: ./index.rsh:40:25:function exp)', 'at ./index.rsh:144:37:application call to "applyCatMove" (defined at: ./index.rsh:67:1:function exp)'],
          msg: null,
          who: 'Alice'
          });
        const v394 = v285.blockers;
        const v396 = stdlib.sub(v379, stdlib.checkedBigNumberify('./index.rsh:45:36:decimal', stdlib.UInt_max, 1));
        const v398 = v394[v396];
        const v401 = stdlib.add(v379, stdlib.checkedBigNumberify('./index.rsh:45:68:decimal', stdlib.UInt_max, 1));
        const v403 = v394[v401];
        const v404 = v398 ? v403 : false;
        const v407 = stdlib.sub(v379, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
        const v409 = v394[v407];
        const v410 = v404 ? v409 : false;
        const v413 = stdlib.add(v379, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
        const v415 = v394[v413];
        const v416 = v410 ? v415 : false;
        const v420 = stdlib.add(v407, stdlib.checkedBigNumberify('./index.rsh:47:36:decimal', stdlib.UInt_max, 1));
        const v422 = v394[v420];
        const v423 = v416 ? v422 : false;
        const v427 = stdlib.sub(v413, stdlib.checkedBigNumberify('./index.rsh:47:75:decimal', stdlib.UInt_max, 1));
        const v429 = v394[v427];
        const v430 = v423 ? v429 : false;
        const v433 = v430 ? false : true;
        stdlib.assert(v433, {
          at: './index.rsh:68:10:application',
          fs: ['at ./index.rsh:144:37:application call to "applyCatMove" (defined at: ./index.rsh:67:1:function exp)'],
          msg: null,
          who: 'Alice'
          });
        sim_r.nextSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:145:18:after expr stmt semicolon', stdlib.UInt_max, 6), v271, v272, v279, v372, v375, v394]);
        sim_r.nextSt_noTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:145:18:after expr stmt semicolon', stdlib.UInt_max, 6), v271, v272, v279, v372, v394]);
        sim_r.view = [ctc1, [stdlib.checkedBigNumberify('./index.rsh:145:18:after expr stmt semicolon', stdlib.UInt_max, 0)]];
        sim_r.isHalt = false;
        
        return sim_r;
        })));
      const [v372] = txn3.data;
      const v375 = txn3.time;
      const v371 = txn3.from;
      ;
      const v374 = stdlib.addressEq(v271, v371);
      stdlib.assert(v374, {
        at: './index.rsh:142:12:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      let v378;
      const v379 = v285.catIndex;
      const v380 = stdlib.lt(v379, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
      const v381 = stdlib.ge(v379, stdlib.checkedBigNumberify('./index.rsh:25:28:application', stdlib.UInt_max, 110));
      const v382 = v380 ? true : v381;
      if (v382) {
        v378 = true;
        }
      else {
        const v384 = stdlib.mod(v379, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
        const v385 = stdlib.eq(v384, stdlib.checkedBigNumberify('./index.rsh:29:23:decimal', stdlib.UInt_max, 0));
        const v387 = stdlib.eq(v384, stdlib.checkedBigNumberify('./index.rsh:29:45:application', stdlib.UInt_max, 10));
        const v388 = v385 ? true : v387;
        if (v388) {
          v378 = true;
          }
        else {
          v378 = false;
          }
        }
      const v392 = v378 ? false : true;
      stdlib.assert(v392, {
        at: './index.rsh:41:10:application',
        fs: ['at ./index.rsh:68:22:application call to "catBlocked" (defined at: ./index.rsh:40:25:function exp)', 'at ./index.rsh:144:37:application call to "applyCatMove" (defined at: ./index.rsh:67:1:function exp)'],
        msg: null,
        who: 'Alice'
        });
      const v394 = v285.blockers;
      const v396 = stdlib.sub(v379, stdlib.checkedBigNumberify('./index.rsh:45:36:decimal', stdlib.UInt_max, 1));
      const v398 = v394[v396];
      const v401 = stdlib.add(v379, stdlib.checkedBigNumberify('./index.rsh:45:68:decimal', stdlib.UInt_max, 1));
      const v403 = v394[v401];
      const v404 = v398 ? v403 : false;
      const v407 = stdlib.sub(v379, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
      const v409 = v394[v407];
      const v410 = v404 ? v409 : false;
      const v413 = stdlib.add(v379, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
      const v415 = v394[v413];
      const v416 = v410 ? v415 : false;
      const v420 = stdlib.add(v407, stdlib.checkedBigNumberify('./index.rsh:47:36:decimal', stdlib.UInt_max, 1));
      const v422 = v394[v420];
      const v423 = v416 ? v422 : false;
      const v427 = stdlib.sub(v413, stdlib.checkedBigNumberify('./index.rsh:47:75:decimal', stdlib.UInt_max, 1));
      const v429 = v394[v427];
      const v430 = v423 ? v429 : false;
      const v433 = v430 ? false : true;
      stdlib.assert(v433, {
        at: './index.rsh:68:10:application',
        fs: ['at ./index.rsh:144:37:application call to "applyCatMove" (defined at: ./index.rsh:67:1:function exp)'],
        msg: null,
        who: 'Alice'
        });
      const txn4 = await (ctc.recv(7, 1, [ctc0], false, false));
      const [v446] = txn4.data;
      const v449 = txn4.time;
      const v445 = txn4.from;
      ;
      const v448 = stdlib.addressEq(v279, v445);
      stdlib.assert(v448, {
        at: './index.rsh:149:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v451 = stdlib.lt(v446, stdlib.checkedBigNumberify('./index.rsh:78:15:decimal', stdlib.UInt_max, 121));
      stdlib.assert(v451, {
        at: './index.rsh:78:10:application',
        fs: ['at ./index.rsh:151:33:application call to "applyBlockerMove" (defined at: ./index.rsh:76:1:function exp)'],
        msg: null,
        who: 'Alice'
        });
      const v453 = stdlib.Array_set(v394, v446, true);
      const v455 = {
        blockers: v453,
        catIndex: v372
        };
      const cv285 = v455;
      const cv580 = v449;
      
      v285 = cv285;
      v580 = cv580;
      
      continue;
      
      }
    let v456;
    const v457 = v285.catIndex;
    const v458 = stdlib.lt(v457, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
    const v459 = stdlib.ge(v457, stdlib.checkedBigNumberify('./index.rsh:25:28:application', stdlib.UInt_max, 110));
    const v460 = v458 ? true : v459;
    if (v460) {
      v456 = true;
      }
    else {
      const v462 = stdlib.mod(v457, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
      const v463 = stdlib.eq(v462, stdlib.checkedBigNumberify('./index.rsh:29:23:decimal', stdlib.UInt_max, 0));
      const v465 = stdlib.eq(v462, stdlib.checkedBigNumberify('./index.rsh:29:45:application', stdlib.UInt_max, 10));
      const v466 = v463 ? true : v465;
      if (v466) {
        v456 = true;
        }
      else {
        v456 = false;
        }
      }
    let v524;
    if (v456) {
      v524 = true;
      }
    else {
      let v470;
      if (v460) {
        v470 = true;
        }
      else {
        const v476 = stdlib.mod(v457, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
        const v477 = stdlib.eq(v476, stdlib.checkedBigNumberify('./index.rsh:29:23:decimal', stdlib.UInt_max, 0));
        const v479 = stdlib.eq(v476, stdlib.checkedBigNumberify('./index.rsh:29:45:application', stdlib.UInt_max, 10));
        const v480 = v477 ? true : v479;
        if (v480) {
          v470 = true;
          }
        else {
          v470 = false;
          }
        }
      const v484 = v470 ? false : true;
      stdlib.assert(v484, {
        at: './index.rsh:41:10:application',
        fs: ['at ./index.rsh:155:47:application call to "catBlocked" (defined at: ./index.rsh:40:25:function exp)'],
        msg: null,
        who: 'Alice'
        });
      const v486 = v285.blockers;
      const v488 = stdlib.sub(v457, stdlib.checkedBigNumberify('./index.rsh:45:36:decimal', stdlib.UInt_max, 1));
      const v490 = v486[v488];
      const v493 = stdlib.add(v457, stdlib.checkedBigNumberify('./index.rsh:45:68:decimal', stdlib.UInt_max, 1));
      const v495 = v486[v493];
      const v496 = v490 ? v495 : false;
      const v499 = stdlib.sub(v457, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
      const v501 = v486[v499];
      const v502 = v496 ? v501 : false;
      const v505 = stdlib.add(v457, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
      const v507 = v486[v505];
      const v508 = v502 ? v507 : false;
      const v512 = stdlib.add(v499, stdlib.checkedBigNumberify('./index.rsh:47:36:decimal', stdlib.UInt_max, 1));
      const v514 = v486[v512];
      const v515 = v508 ? v514 : false;
      const v519 = stdlib.sub(v505, stdlib.checkedBigNumberify('./index.rsh:47:75:decimal', stdlib.UInt_max, 1));
      const v521 = v486[v519];
      const v522 = v515 ? v521 : false;
      v524 = v522;
      }
    let v525;
    if (v460) {
      v525 = true;
      }
    else {
      const v531 = stdlib.mod(v457, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
      const v532 = stdlib.eq(v531, stdlib.checkedBigNumberify('./index.rsh:29:23:decimal', stdlib.UInt_max, 0));
      const v534 = stdlib.eq(v531, stdlib.checkedBigNumberify('./index.rsh:29:45:application', stdlib.UInt_max, 10));
      const v535 = v532 ? true : v534;
      if (v535) {
        v525 = true;
        }
      else {
        v525 = false;
        }
      }
    const v538 = [stdlib.checkedBigNumberify('./index.rsh:156:50:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:156:53:decimal', stdlib.UInt_max, 0)];
    const v539 = [stdlib.checkedBigNumberify('./index.rsh:156:59:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:156:62:decimal', stdlib.UInt_max, 2)];
    const v540 = v525 ? v538 : v539;
    const v541 = v540[stdlib.checkedBigNumberify('./index.rsh:156:15:array', stdlib.UInt_max, 0)];
    const v542 = v540[stdlib.checkedBigNumberify('./index.rsh:156:15:array', stdlib.UInt_max, 1)];
    const v543 = stdlib.mul(v541, v272);
    ;
    const v548 = stdlib.mul(v542, v272);
    ;
    stdlib.protect(ctc10, await interact.doneState(v285), {
      at: './index.rsh:162:27:application',
      fs: ['at ./index.rsh:161:11:application call to [unknown function] (defined at: ./index.rsh:161:23:function exp)'],
      msg: 'doneState',
      who: 'Alice'
      });
    
    return;}
  
  
  };
export async function Bob(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Tuple([ctc0]);
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 121));
  const ctc6 = stdlib.T_Object({
    blockers: ctc5,
    catIndex: ctc0
    });
  const ctc7 = stdlib.T_Tuple([ctc0, ctc3, ctc0, ctc3, ctc6, ctc0]);
  const ctc8 = stdlib.T_Tuple([ctc0, ctc3, ctc0, ctc3, ctc6]);
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc0, ctc3, ctc0, ctc3, ctc0, ctc0, ctc5]);
  const ctc11 = stdlib.T_Tuple([ctc0, ctc3, ctc0, ctc3, ctc0, ctc5]);
  const ctc12 = stdlib.T_Tuple([ctc0, ctc3, ctc0, ctc0]);
  const ctc13 = stdlib.T_Tuple([ctc0, ctc3, ctc0]);
  
  
  const v267 = await ctc.creationTime();
  
  const txn1 = await (ctc.recv(1, 1, [ctc0], false, false));
  const [v272] = txn1.data;
  const v275 = txn1.time;
  const v271 = txn1.from;
  ;
  stdlib.protect(ctc1, await interact.acceptWager(v272), {
    at: './index.rsh:129:29:application',
    fs: ['at ./index.rsh:128:13:application call to [unknown function] (defined at: ./index.rsh:128:17:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  
  const txn2 = await (ctc.sendrecv(2, 0, stdlib.checkedBigNumberify('./index.rsh:130:9:dot', stdlib.UInt_max, 2), [ctc3, ctc0, ctc0], [v271, v272, v275], [v272, []], [], true, true, stdlib.checkedBigNumberify('./index.rsh:111:18:decimal', stdlib.UInt_max, 10), (async (txn2) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:130:9:dot', stdlib.UInt_max, 1), v271, v272, v275]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('./index.rsh:130:9:dot', stdlib.UInt_max, 1), v271, v272]);
    const [] = txn2.data;
    const v282 = txn2.time;
    const v279 = txn2.from;
    
    sim_r.txns.push({
      amt: v272,
      kind: 'to',
      tok: undefined
      });
    const v286 = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
    const v287 = {
      blockers: v286,
      catIndex: stdlib.checkedBigNumberify('./index.rsh:14:18:decimal', stdlib.UInt_max, 60)
      };
    const v285 = v287;
    const v580 = v282;
    
    if ((() => {
      let v292;
      const v293 = v285.catIndex;
      const v294 = stdlib.lt(v293, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
      const v295 = stdlib.ge(v293, stdlib.checkedBigNumberify('./index.rsh:25:28:application', stdlib.UInt_max, 110));
      const v296 = v294 ? true : v295;
      if (v296) {
        v292 = true;
        }
      else {
        const v298 = stdlib.mod(v293, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
        const v299 = stdlib.eq(v298, stdlib.checkedBigNumberify('./index.rsh:29:23:decimal', stdlib.UInt_max, 0));
        const v301 = stdlib.eq(v298, stdlib.checkedBigNumberify('./index.rsh:29:45:application', stdlib.UInt_max, 10));
        const v302 = v299 ? true : v301;
        if (v302) {
          v292 = true;
          }
        else {
          v292 = false;
          }
        }
      let v360;
      if (v292) {
        v360 = true;
        }
      else {
        let v306;
        if (v296) {
          v306 = true;
          }
        else {
          const v312 = stdlib.mod(v293, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
          const v313 = stdlib.eq(v312, stdlib.checkedBigNumberify('./index.rsh:29:23:decimal', stdlib.UInt_max, 0));
          const v315 = stdlib.eq(v312, stdlib.checkedBigNumberify('./index.rsh:29:45:application', stdlib.UInt_max, 10));
          const v316 = v313 ? true : v315;
          if (v316) {
            v306 = true;
            }
          else {
            v306 = false;
            }
          }
        const v320 = v306 ? false : true;
        stdlib.assert(v320, {
          at: './index.rsh:41:10:application',
          fs: ['at ./index.rsh:89:38:application call to "catBlocked" (defined at: ./index.rsh:40:25:function exp)', 'at ./index.rsh:137:24:application call to "gameOver" (defined at: ./index.rsh:88:1:function exp)'],
          msg: null,
          who: 'Bob'
          });
        const v322 = v285.blockers;
        const v324 = stdlib.sub(v293, stdlib.checkedBigNumberify('./index.rsh:45:36:decimal', stdlib.UInt_max, 1));
        const v326 = v322[v324];
        const v329 = stdlib.add(v293, stdlib.checkedBigNumberify('./index.rsh:45:68:decimal', stdlib.UInt_max, 1));
        const v331 = v322[v329];
        const v332 = v326 ? v331 : false;
        const v335 = stdlib.sub(v293, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
        const v337 = v322[v335];
        const v338 = v332 ? v337 : false;
        const v341 = stdlib.add(v293, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
        const v343 = v322[v341];
        const v344 = v338 ? v343 : false;
        const v348 = stdlib.add(v335, stdlib.checkedBigNumberify('./index.rsh:47:36:decimal', stdlib.UInt_max, 1));
        const v350 = v322[v348];
        const v351 = v344 ? v350 : false;
        const v355 = stdlib.sub(v341, stdlib.checkedBigNumberify('./index.rsh:47:75:decimal', stdlib.UInt_max, 1));
        const v357 = v322[v355];
        const v358 = v351 ? v357 : false;
        v360 = v358;
        }
      const v363 = v360 ? false : true;
      
      return v363;})()) {
      sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:138:19:after expr stmt semicolon', stdlib.UInt_max, 4), v271, v272, v279, v285, v580]);
      sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:138:19:after expr stmt semicolon', stdlib.UInt_max, 4), v271, v272, v279, v285]);
      sim_r.view = [ctc2, [stdlib.checkedBigNumberify('./index.rsh:138:19:after expr stmt semicolon', stdlib.UInt_max, 0)]];
      sim_r.isHalt = false;
      }
    else {
      let v456;
      const v457 = v285.catIndex;
      const v458 = stdlib.lt(v457, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
      const v459 = stdlib.ge(v457, stdlib.checkedBigNumberify('./index.rsh:25:28:application', stdlib.UInt_max, 110));
      const v460 = v458 ? true : v459;
      if (v460) {
        v456 = true;
        }
      else {
        const v462 = stdlib.mod(v457, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
        const v463 = stdlib.eq(v462, stdlib.checkedBigNumberify('./index.rsh:29:23:decimal', stdlib.UInt_max, 0));
        const v465 = stdlib.eq(v462, stdlib.checkedBigNumberify('./index.rsh:29:45:application', stdlib.UInt_max, 10));
        const v466 = v463 ? true : v465;
        if (v466) {
          v456 = true;
          }
        else {
          v456 = false;
          }
        }
      let v524;
      if (v456) {
        v524 = true;
        }
      else {
        let v470;
        if (v460) {
          v470 = true;
          }
        else {
          const v476 = stdlib.mod(v457, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
          const v477 = stdlib.eq(v476, stdlib.checkedBigNumberify('./index.rsh:29:23:decimal', stdlib.UInt_max, 0));
          const v479 = stdlib.eq(v476, stdlib.checkedBigNumberify('./index.rsh:29:45:application', stdlib.UInt_max, 10));
          const v480 = v477 ? true : v479;
          if (v480) {
            v470 = true;
            }
          else {
            v470 = false;
            }
          }
        const v484 = v470 ? false : true;
        stdlib.assert(v484, {
          at: './index.rsh:41:10:application',
          fs: ['at ./index.rsh:155:47:application call to "catBlocked" (defined at: ./index.rsh:40:25:function exp)'],
          msg: null,
          who: 'Bob'
          });
        const v486 = v285.blockers;
        const v488 = stdlib.sub(v457, stdlib.checkedBigNumberify('./index.rsh:45:36:decimal', stdlib.UInt_max, 1));
        const v490 = v486[v488];
        const v493 = stdlib.add(v457, stdlib.checkedBigNumberify('./index.rsh:45:68:decimal', stdlib.UInt_max, 1));
        const v495 = v486[v493];
        const v496 = v490 ? v495 : false;
        const v499 = stdlib.sub(v457, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
        const v501 = v486[v499];
        const v502 = v496 ? v501 : false;
        const v505 = stdlib.add(v457, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
        const v507 = v486[v505];
        const v508 = v502 ? v507 : false;
        const v512 = stdlib.add(v499, stdlib.checkedBigNumberify('./index.rsh:47:36:decimal', stdlib.UInt_max, 1));
        const v514 = v486[v512];
        const v515 = v508 ? v514 : false;
        const v519 = stdlib.sub(v505, stdlib.checkedBigNumberify('./index.rsh:47:75:decimal', stdlib.UInt_max, 1));
        const v521 = v486[v519];
        const v522 = v515 ? v521 : false;
        v524 = v522;
        }
      let v525;
      if (v460) {
        v525 = true;
        }
      else {
        const v531 = stdlib.mod(v457, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
        const v532 = stdlib.eq(v531, stdlib.checkedBigNumberify('./index.rsh:29:23:decimal', stdlib.UInt_max, 0));
        const v534 = stdlib.eq(v531, stdlib.checkedBigNumberify('./index.rsh:29:45:application', stdlib.UInt_max, 10));
        const v535 = v532 ? true : v534;
        if (v535) {
          v525 = true;
          }
        else {
          v525 = false;
          }
        }
      const v538 = [stdlib.checkedBigNumberify('./index.rsh:156:50:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:156:53:decimal', stdlib.UInt_max, 0)];
      const v539 = [stdlib.checkedBigNumberify('./index.rsh:156:59:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:156:62:decimal', stdlib.UInt_max, 2)];
      const v540 = v525 ? v538 : v539;
      const v541 = v540[stdlib.checkedBigNumberify('./index.rsh:156:15:array', stdlib.UInt_max, 0)];
      const v542 = v540[stdlib.checkedBigNumberify('./index.rsh:156:15:array', stdlib.UInt_max, 1)];
      const v543 = stdlib.mul(v541, v272);
      sim_r.txns.push({
        amt: v543,
        kind: 'from',
        to: v271,
        tok: undefined
        });
      const v548 = stdlib.mul(v542, v272);
      sim_r.txns.push({
        amt: v548,
        kind: 'from',
        to: v279,
        tok: undefined
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined
        })
      sim_r.nextSt = stdlib.digest(ctc9, []);
      sim_r.nextSt_noTime = stdlib.digest(ctc9, []);
      sim_r.view = [ctc2, [stdlib.checkedBigNumberify('./index.rsh:159:17:after expr stmt semicolon', stdlib.UInt_max, 0)]];
      sim_r.isHalt = true;
      }
    return sim_r;
    })));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.recv(3, 0, [], false, false));
    const [] = txn3.data;
    const v565 = txn3.time;
    const v562 = txn3.from;
    ;
    const v564 = stdlib.addressEq(v271, v562);
    stdlib.assert(v564, {
      at: 'reach standard library:209:7:dot',
      fs: ['at ./index.rsh:131:41:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'sender correct',
      who: 'Bob'
      });
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:120:33:application',
      fs: ['at ./index.rsh:119:13:application call to [unknown function] (defined at: ./index.rsh:119:25:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:118:32:function exp)', 'at ./index.rsh:131:41:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    }
  else {
    const [] = txn2.data;
    const v282 = txn2.time;
    const v279 = txn2.from;
    ;
    const v286 = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
    const v287 = {
      blockers: v286,
      catIndex: stdlib.checkedBigNumberify('./index.rsh:14:18:decimal', stdlib.UInt_max, 60)
      };
    let v285 = v287;
    let v580 = v282;
    
    while ((() => {
      let v292;
      const v293 = v285.catIndex;
      const v294 = stdlib.lt(v293, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
      const v295 = stdlib.ge(v293, stdlib.checkedBigNumberify('./index.rsh:25:28:application', stdlib.UInt_max, 110));
      const v296 = v294 ? true : v295;
      if (v296) {
        v292 = true;
        }
      else {
        const v298 = stdlib.mod(v293, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
        const v299 = stdlib.eq(v298, stdlib.checkedBigNumberify('./index.rsh:29:23:decimal', stdlib.UInt_max, 0));
        const v301 = stdlib.eq(v298, stdlib.checkedBigNumberify('./index.rsh:29:45:application', stdlib.UInt_max, 10));
        const v302 = v299 ? true : v301;
        if (v302) {
          v292 = true;
          }
        else {
          v292 = false;
          }
        }
      let v360;
      if (v292) {
        v360 = true;
        }
      else {
        let v306;
        if (v296) {
          v306 = true;
          }
        else {
          const v312 = stdlib.mod(v293, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
          const v313 = stdlib.eq(v312, stdlib.checkedBigNumberify('./index.rsh:29:23:decimal', stdlib.UInt_max, 0));
          const v315 = stdlib.eq(v312, stdlib.checkedBigNumberify('./index.rsh:29:45:application', stdlib.UInt_max, 10));
          const v316 = v313 ? true : v315;
          if (v316) {
            v306 = true;
            }
          else {
            v306 = false;
            }
          }
        const v320 = v306 ? false : true;
        stdlib.assert(v320, {
          at: './index.rsh:41:10:application',
          fs: ['at ./index.rsh:89:38:application call to "catBlocked" (defined at: ./index.rsh:40:25:function exp)', 'at ./index.rsh:137:24:application call to "gameOver" (defined at: ./index.rsh:88:1:function exp)'],
          msg: null,
          who: 'Bob'
          });
        const v322 = v285.blockers;
        const v324 = stdlib.sub(v293, stdlib.checkedBigNumberify('./index.rsh:45:36:decimal', stdlib.UInt_max, 1));
        const v326 = v322[v324];
        const v329 = stdlib.add(v293, stdlib.checkedBigNumberify('./index.rsh:45:68:decimal', stdlib.UInt_max, 1));
        const v331 = v322[v329];
        const v332 = v326 ? v331 : false;
        const v335 = stdlib.sub(v293, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
        const v337 = v322[v335];
        const v338 = v332 ? v337 : false;
        const v341 = stdlib.add(v293, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
        const v343 = v322[v341];
        const v344 = v338 ? v343 : false;
        const v348 = stdlib.add(v335, stdlib.checkedBigNumberify('./index.rsh:47:36:decimal', stdlib.UInt_max, 1));
        const v350 = v322[v348];
        const v351 = v344 ? v350 : false;
        const v355 = stdlib.sub(v341, stdlib.checkedBigNumberify('./index.rsh:47:75:decimal', stdlib.UInt_max, 1));
        const v357 = v322[v355];
        const v358 = v351 ? v357 : false;
        v360 = v358;
        }
      const v363 = v360 ? false : true;
      
      return v363;})()) {
      const txn3 = await (ctc.recv(6, 1, [ctc0], false, false));
      const [v372] = txn3.data;
      const v375 = txn3.time;
      const v371 = txn3.from;
      ;
      const v374 = stdlib.addressEq(v271, v371);
      stdlib.assert(v374, {
        at: './index.rsh:142:12:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      let v378;
      const v379 = v285.catIndex;
      const v380 = stdlib.lt(v379, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
      const v381 = stdlib.ge(v379, stdlib.checkedBigNumberify('./index.rsh:25:28:application', stdlib.UInt_max, 110));
      const v382 = v380 ? true : v381;
      if (v382) {
        v378 = true;
        }
      else {
        const v384 = stdlib.mod(v379, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
        const v385 = stdlib.eq(v384, stdlib.checkedBigNumberify('./index.rsh:29:23:decimal', stdlib.UInt_max, 0));
        const v387 = stdlib.eq(v384, stdlib.checkedBigNumberify('./index.rsh:29:45:application', stdlib.UInt_max, 10));
        const v388 = v385 ? true : v387;
        if (v388) {
          v378 = true;
          }
        else {
          v378 = false;
          }
        }
      const v392 = v378 ? false : true;
      stdlib.assert(v392, {
        at: './index.rsh:41:10:application',
        fs: ['at ./index.rsh:68:22:application call to "catBlocked" (defined at: ./index.rsh:40:25:function exp)', 'at ./index.rsh:144:37:application call to "applyCatMove" (defined at: ./index.rsh:67:1:function exp)'],
        msg: null,
        who: 'Bob'
        });
      const v394 = v285.blockers;
      const v396 = stdlib.sub(v379, stdlib.checkedBigNumberify('./index.rsh:45:36:decimal', stdlib.UInt_max, 1));
      const v398 = v394[v396];
      const v401 = stdlib.add(v379, stdlib.checkedBigNumberify('./index.rsh:45:68:decimal', stdlib.UInt_max, 1));
      const v403 = v394[v401];
      const v404 = v398 ? v403 : false;
      const v407 = stdlib.sub(v379, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
      const v409 = v394[v407];
      const v410 = v404 ? v409 : false;
      const v413 = stdlib.add(v379, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
      const v415 = v394[v413];
      const v416 = v410 ? v415 : false;
      const v420 = stdlib.add(v407, stdlib.checkedBigNumberify('./index.rsh:47:36:decimal', stdlib.UInt_max, 1));
      const v422 = v394[v420];
      const v423 = v416 ? v422 : false;
      const v427 = stdlib.sub(v413, stdlib.checkedBigNumberify('./index.rsh:47:75:decimal', stdlib.UInt_max, 1));
      const v429 = v394[v427];
      const v430 = v423 ? v429 : false;
      const v433 = v430 ? false : true;
      stdlib.assert(v433, {
        at: './index.rsh:68:10:application',
        fs: ['at ./index.rsh:144:37:application call to "applyCatMove" (defined at: ./index.rsh:67:1:function exp)'],
        msg: null,
        who: 'Bob'
        });
      const v441 = {
        blockers: v394,
        catIndex: v372
        };
      const v442 = stdlib.protect(ctc0, await interact.getHex(v441), {
        at: './index.rsh:61:37:application',
        fs: ['at ./index.rsh:148:46:application call to "getValidBlockMove" (defined at: ./index.rsh:60:1:function exp)', 'at ./index.rsh:147:16:application call to [unknown function] (defined at: ./index.rsh:147:20:function exp)'],
        msg: 'getHex',
        who: 'Bob'
        });
      const v443 = stdlib.lt(v442, stdlib.checkedBigNumberify('./index.rsh:62:23:decimal', stdlib.UInt_max, 121));
      stdlib.assert(v443, {
        at: './index.rsh:62:9:application',
        fs: ['at ./index.rsh:148:46:application call to "getValidBlockMove" (defined at: ./index.rsh:60:1:function exp)', 'at ./index.rsh:147:16:application call to [unknown function] (defined at: ./index.rsh:147:20:function exp)'],
        msg: null,
        who: 'Bob'
        });
      
      
      const txn4 = await (ctc.sendrecv(7, 1, stdlib.checkedBigNumberify('./index.rsh:149:11:dot', stdlib.UInt_max, 4), [ctc3, ctc0, ctc3, ctc0, ctc0, ctc5, ctc0], [v271, v272, v279, v372, v375, v394, v442], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc0], true, true, false, (async (txn4) => {
        const sim_r = { txns: [] };
        sim_r.prevSt = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:149:11:dot', stdlib.UInt_max, 6), v271, v272, v279, v372, v375, v394]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:149:11:dot', stdlib.UInt_max, 6), v271, v272, v279, v372, v394]);
        const [v446] = txn4.data;
        const v449 = txn4.time;
        const v445 = txn4.from;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v448 = stdlib.addressEq(v279, v445);
        stdlib.assert(v448, {
          at: './index.rsh:149:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v451 = stdlib.lt(v446, stdlib.checkedBigNumberify('./index.rsh:78:15:decimal', stdlib.UInt_max, 121));
        stdlib.assert(v451, {
          at: './index.rsh:78:10:application',
          fs: ['at ./index.rsh:151:33:application call to "applyBlockerMove" (defined at: ./index.rsh:76:1:function exp)'],
          msg: null,
          who: 'Bob'
          });
        const v453 = stdlib.Array_set(v394, v446, true);
        const v455 = {
          blockers: v453,
          catIndex: v372
          };
        const cv285 = v455;
        const cv580 = v449;
        
        (() => {
          const v285 = cv285;
          const v580 = cv580;
          
          if ((() => {
            let v292;
            const v293 = v285.catIndex;
            const v294 = stdlib.lt(v293, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
            const v295 = stdlib.ge(v293, stdlib.checkedBigNumberify('./index.rsh:25:28:application', stdlib.UInt_max, 110));
            const v296 = v294 ? true : v295;
            if (v296) {
              v292 = true;
              }
            else {
              const v298 = stdlib.mod(v293, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
              const v299 = stdlib.eq(v298, stdlib.checkedBigNumberify('./index.rsh:29:23:decimal', stdlib.UInt_max, 0));
              const v301 = stdlib.eq(v298, stdlib.checkedBigNumberify('./index.rsh:29:45:application', stdlib.UInt_max, 10));
              const v302 = v299 ? true : v301;
              if (v302) {
                v292 = true;
                }
              else {
                v292 = false;
                }
              }
            let v360;
            if (v292) {
              v360 = true;
              }
            else {
              let v306;
              if (v296) {
                v306 = true;
                }
              else {
                const v312 = stdlib.mod(v293, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
                const v313 = stdlib.eq(v312, stdlib.checkedBigNumberify('./index.rsh:29:23:decimal', stdlib.UInt_max, 0));
                const v315 = stdlib.eq(v312, stdlib.checkedBigNumberify('./index.rsh:29:45:application', stdlib.UInt_max, 10));
                const v316 = v313 ? true : v315;
                if (v316) {
                  v306 = true;
                  }
                else {
                  v306 = false;
                  }
                }
              const v320 = v306 ? false : true;
              stdlib.assert(v320, {
                at: './index.rsh:41:10:application',
                fs: ['at ./index.rsh:89:38:application call to "catBlocked" (defined at: ./index.rsh:40:25:function exp)', 'at ./index.rsh:137:24:application call to "gameOver" (defined at: ./index.rsh:88:1:function exp)'],
                msg: null,
                who: 'Bob'
                });
              const v322 = v285.blockers;
              const v324 = stdlib.sub(v293, stdlib.checkedBigNumberify('./index.rsh:45:36:decimal', stdlib.UInt_max, 1));
              const v326 = v322[v324];
              const v329 = stdlib.add(v293, stdlib.checkedBigNumberify('./index.rsh:45:68:decimal', stdlib.UInt_max, 1));
              const v331 = v322[v329];
              const v332 = v326 ? v331 : false;
              const v335 = stdlib.sub(v293, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
              const v337 = v322[v335];
              const v338 = v332 ? v337 : false;
              const v341 = stdlib.add(v293, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
              const v343 = v322[v341];
              const v344 = v338 ? v343 : false;
              const v348 = stdlib.add(v335, stdlib.checkedBigNumberify('./index.rsh:47:36:decimal', stdlib.UInt_max, 1));
              const v350 = v322[v348];
              const v351 = v344 ? v350 : false;
              const v355 = stdlib.sub(v341, stdlib.checkedBigNumberify('./index.rsh:47:75:decimal', stdlib.UInt_max, 1));
              const v357 = v322[v355];
              const v358 = v351 ? v357 : false;
              v360 = v358;
              }
            const v363 = v360 ? false : true;
            
            return v363;})()) {
            sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:138:19:after expr stmt semicolon', stdlib.UInt_max, 4), v271, v272, v279, v285, v580]);
            sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:138:19:after expr stmt semicolon', stdlib.UInt_max, 4), v271, v272, v279, v285]);
            sim_r.view = [ctc2, [stdlib.checkedBigNumberify('./index.rsh:138:19:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            }
          else {
            let v456;
            const v457 = v285.catIndex;
            const v458 = stdlib.lt(v457, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
            const v459 = stdlib.ge(v457, stdlib.checkedBigNumberify('./index.rsh:25:28:application', stdlib.UInt_max, 110));
            const v460 = v458 ? true : v459;
            if (v460) {
              v456 = true;
              }
            else {
              const v462 = stdlib.mod(v457, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
              const v463 = stdlib.eq(v462, stdlib.checkedBigNumberify('./index.rsh:29:23:decimal', stdlib.UInt_max, 0));
              const v465 = stdlib.eq(v462, stdlib.checkedBigNumberify('./index.rsh:29:45:application', stdlib.UInt_max, 10));
              const v466 = v463 ? true : v465;
              if (v466) {
                v456 = true;
                }
              else {
                v456 = false;
                }
              }
            let v524;
            if (v456) {
              v524 = true;
              }
            else {
              let v470;
              if (v460) {
                v470 = true;
                }
              else {
                const v476 = stdlib.mod(v457, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
                const v477 = stdlib.eq(v476, stdlib.checkedBigNumberify('./index.rsh:29:23:decimal', stdlib.UInt_max, 0));
                const v479 = stdlib.eq(v476, stdlib.checkedBigNumberify('./index.rsh:29:45:application', stdlib.UInt_max, 10));
                const v480 = v477 ? true : v479;
                if (v480) {
                  v470 = true;
                  }
                else {
                  v470 = false;
                  }
                }
              const v484 = v470 ? false : true;
              stdlib.assert(v484, {
                at: './index.rsh:41:10:application',
                fs: ['at ./index.rsh:155:47:application call to "catBlocked" (defined at: ./index.rsh:40:25:function exp)'],
                msg: null,
                who: 'Bob'
                });
              const v486 = v285.blockers;
              const v488 = stdlib.sub(v457, stdlib.checkedBigNumberify('./index.rsh:45:36:decimal', stdlib.UInt_max, 1));
              const v490 = v486[v488];
              const v493 = stdlib.add(v457, stdlib.checkedBigNumberify('./index.rsh:45:68:decimal', stdlib.UInt_max, 1));
              const v495 = v486[v493];
              const v496 = v490 ? v495 : false;
              const v499 = stdlib.sub(v457, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
              const v501 = v486[v499];
              const v502 = v496 ? v501 : false;
              const v505 = stdlib.add(v457, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
              const v507 = v486[v505];
              const v508 = v502 ? v507 : false;
              const v512 = stdlib.add(v499, stdlib.checkedBigNumberify('./index.rsh:47:36:decimal', stdlib.UInt_max, 1));
              const v514 = v486[v512];
              const v515 = v508 ? v514 : false;
              const v519 = stdlib.sub(v505, stdlib.checkedBigNumberify('./index.rsh:47:75:decimal', stdlib.UInt_max, 1));
              const v521 = v486[v519];
              const v522 = v515 ? v521 : false;
              v524 = v522;
              }
            let v525;
            if (v460) {
              v525 = true;
              }
            else {
              const v531 = stdlib.mod(v457, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
              const v532 = stdlib.eq(v531, stdlib.checkedBigNumberify('./index.rsh:29:23:decimal', stdlib.UInt_max, 0));
              const v534 = stdlib.eq(v531, stdlib.checkedBigNumberify('./index.rsh:29:45:application', stdlib.UInt_max, 10));
              const v535 = v532 ? true : v534;
              if (v535) {
                v525 = true;
                }
              else {
                v525 = false;
                }
              }
            const v538 = [stdlib.checkedBigNumberify('./index.rsh:156:50:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:156:53:decimal', stdlib.UInt_max, 0)];
            const v539 = [stdlib.checkedBigNumberify('./index.rsh:156:59:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:156:62:decimal', stdlib.UInt_max, 2)];
            const v540 = v525 ? v538 : v539;
            const v541 = v540[stdlib.checkedBigNumberify('./index.rsh:156:15:array', stdlib.UInt_max, 0)];
            const v542 = v540[stdlib.checkedBigNumberify('./index.rsh:156:15:array', stdlib.UInt_max, 1)];
            const v543 = stdlib.mul(v541, v272);
            sim_r.txns.push({
              amt: v543,
              kind: 'from',
              to: v271,
              tok: undefined
              });
            const v548 = stdlib.mul(v542, v272);
            sim_r.txns.push({
              amt: v548,
              kind: 'from',
              to: v279,
              tok: undefined
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.nextSt = stdlib.digest(ctc9, []);
            sim_r.nextSt_noTime = stdlib.digest(ctc9, []);
            sim_r.view = [ctc2, [stdlib.checkedBigNumberify('./index.rsh:159:17:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = true;
            }})();
        return sim_r;
        })));
      const [v446] = txn4.data;
      const v449 = txn4.time;
      const v445 = txn4.from;
      ;
      const v448 = stdlib.addressEq(v279, v445);
      stdlib.assert(v448, {
        at: './index.rsh:149:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const v451 = stdlib.lt(v446, stdlib.checkedBigNumberify('./index.rsh:78:15:decimal', stdlib.UInt_max, 121));
      stdlib.assert(v451, {
        at: './index.rsh:78:10:application',
        fs: ['at ./index.rsh:151:33:application call to "applyBlockerMove" (defined at: ./index.rsh:76:1:function exp)'],
        msg: null,
        who: 'Bob'
        });
      const v453 = stdlib.Array_set(v394, v446, true);
      const v455 = {
        blockers: v453,
        catIndex: v372
        };
      const cv285 = v455;
      const cv580 = v449;
      
      v285 = cv285;
      v580 = cv580;
      
      continue;
      
      }
    let v456;
    const v457 = v285.catIndex;
    const v458 = stdlib.lt(v457, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
    const v459 = stdlib.ge(v457, stdlib.checkedBigNumberify('./index.rsh:25:28:application', stdlib.UInt_max, 110));
    const v460 = v458 ? true : v459;
    if (v460) {
      v456 = true;
      }
    else {
      const v462 = stdlib.mod(v457, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
      const v463 = stdlib.eq(v462, stdlib.checkedBigNumberify('./index.rsh:29:23:decimal', stdlib.UInt_max, 0));
      const v465 = stdlib.eq(v462, stdlib.checkedBigNumberify('./index.rsh:29:45:application', stdlib.UInt_max, 10));
      const v466 = v463 ? true : v465;
      if (v466) {
        v456 = true;
        }
      else {
        v456 = false;
        }
      }
    let v524;
    if (v456) {
      v524 = true;
      }
    else {
      let v470;
      if (v460) {
        v470 = true;
        }
      else {
        const v476 = stdlib.mod(v457, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
        const v477 = stdlib.eq(v476, stdlib.checkedBigNumberify('./index.rsh:29:23:decimal', stdlib.UInt_max, 0));
        const v479 = stdlib.eq(v476, stdlib.checkedBigNumberify('./index.rsh:29:45:application', stdlib.UInt_max, 10));
        const v480 = v477 ? true : v479;
        if (v480) {
          v470 = true;
          }
        else {
          v470 = false;
          }
        }
      const v484 = v470 ? false : true;
      stdlib.assert(v484, {
        at: './index.rsh:41:10:application',
        fs: ['at ./index.rsh:155:47:application call to "catBlocked" (defined at: ./index.rsh:40:25:function exp)'],
        msg: null,
        who: 'Bob'
        });
      const v486 = v285.blockers;
      const v488 = stdlib.sub(v457, stdlib.checkedBigNumberify('./index.rsh:45:36:decimal', stdlib.UInt_max, 1));
      const v490 = v486[v488];
      const v493 = stdlib.add(v457, stdlib.checkedBigNumberify('./index.rsh:45:68:decimal', stdlib.UInt_max, 1));
      const v495 = v486[v493];
      const v496 = v490 ? v495 : false;
      const v499 = stdlib.sub(v457, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
      const v501 = v486[v499];
      const v502 = v496 ? v501 : false;
      const v505 = stdlib.add(v457, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
      const v507 = v486[v505];
      const v508 = v502 ? v507 : false;
      const v512 = stdlib.add(v499, stdlib.checkedBigNumberify('./index.rsh:47:36:decimal', stdlib.UInt_max, 1));
      const v514 = v486[v512];
      const v515 = v508 ? v514 : false;
      const v519 = stdlib.sub(v505, stdlib.checkedBigNumberify('./index.rsh:47:75:decimal', stdlib.UInt_max, 1));
      const v521 = v486[v519];
      const v522 = v515 ? v521 : false;
      v524 = v522;
      }
    let v525;
    if (v460) {
      v525 = true;
      }
    else {
      const v531 = stdlib.mod(v457, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
      const v532 = stdlib.eq(v531, stdlib.checkedBigNumberify('./index.rsh:29:23:decimal', stdlib.UInt_max, 0));
      const v534 = stdlib.eq(v531, stdlib.checkedBigNumberify('./index.rsh:29:45:application', stdlib.UInt_max, 10));
      const v535 = v532 ? true : v534;
      if (v535) {
        v525 = true;
        }
      else {
        v525 = false;
        }
      }
    const v538 = [stdlib.checkedBigNumberify('./index.rsh:156:50:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:156:53:decimal', stdlib.UInt_max, 0)];
    const v539 = [stdlib.checkedBigNumberify('./index.rsh:156:59:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:156:62:decimal', stdlib.UInt_max, 2)];
    const v540 = v525 ? v538 : v539;
    const v541 = v540[stdlib.checkedBigNumberify('./index.rsh:156:15:array', stdlib.UInt_max, 0)];
    const v542 = v540[stdlib.checkedBigNumberify('./index.rsh:156:15:array', stdlib.UInt_max, 1)];
    const v543 = stdlib.mul(v541, v272);
    ;
    const v548 = stdlib.mul(v542, v272);
    ;
    stdlib.protect(ctc1, await interact.doneState(v285), {
      at: './index.rsh:162:27:application',
      fs: ['at ./index.rsh:161:11:application call to [unknown function] (defined at: ./index.rsh:161:23:function exp)'],
      msg: 'doneState',
      who: 'Bob'
      });
    
    return;}
  
  
  };

const _ALGO = {
  appApproval: `#pragma version 3
// Check that we're an App
txn TypeEnum
int appl
==
assert
txn RekeyTo
global ZeroAddress
==
assert
// Check that everyone's here
global GroupSize
int 3
>=
assert
// Check txnAppl (us)
txn GroupIndex
int 0
==
assert
// Check txnFromHandler
int 0
gtxn 2 Sender
byte "{{m1}}"
==
||
gtxn 2 Sender
byte "{{m2}}"
==
||
gtxn 2 Sender
byte "{{m3}}"
==
||
gtxn 2 Sender
byte "{{m6}}"
==
||
gtxn 2 Sender
byte "{{m7}}"
==
||
assert
byte base64(cw==)
app_global_get
gtxna 0 ApplicationArgs 0
==
assert
byte base64(bA==)
app_global_get
gtxna 0 ApplicationArgs 5
btoi
==
assert
// Don't check anyone else, because Handler does
// Update state
byte base64(cw==)
gtxna 0 ApplicationArgs 1
app_global_put
byte base64(bA==)
global Round
app_global_put
byte base64(dg==)
gtxna 0 ApplicationArgs 2
app_global_put
byte base64(aA==)
gtxna 0 ApplicationArgs 3
btoi
app_global_put
byte base64(aA==)
app_global_get
bnz halted
txn OnCompletion
int NoOp
==
assert
b done
halted:
txn OnCompletion
int DeleteApplication
==
assert
done:
int 1
return
`,
  appApproval0: `#pragma version 3
// Check that we're an App
txn TypeEnum
int appl
==
assert
txn RekeyTo
global ZeroAddress
==
assert
txn Sender
byte "{{Deployer}}"
==
assert
txn ApplicationID
bz init
global GroupSize
int 2
==
assert
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Amount
int 100000
==
assert
// We don't check the receiver, because we don't know it yet, because the escrow account embeds our id
// We don't check the sender, because we don't care... anyone is allowed to fund it. We'll give it back to the deployer, though.
txn OnCompletion
int UpdateApplication
==
assert
byte base64(cw==)
// compute state in HM_Set 0
int 0
itob
keccak256
app_global_put
byte base64(bA==)
global Round
app_global_put
byte base64(dg==)
byte base64()
app_global_put
byte base64(aA==)
int 0
app_global_put
b done
init:
global GroupSize
int 1
==
assert
txn OnCompletion
int NoOp
==
assert
done:
int 1
return
`,
  appClear: `#pragma version 3
// We're alone
global GroupSize
int 1
==
assert
// We're halted
byte base64(aA==)
app_global_get
int 1
==
assert
done:
int 1
return
`,
  ctc: `#pragma version 3
// Check size
global GroupSize
int 3
>=
assert
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
// Don't check anything else, because app does
// Check us
txn TypeEnum
int pay
==
int axfer
dup2
==
||
assert
txn RekeyTo
global ZeroAddress
==
assert
txn GroupIndex
int 3
>=
assert
done:
int 1
return
`,
  stepargs: [null, {
    count: 7,
    size: 97
    }, {
    count: 8,
    size: 129
    }, {
    count: 8,
    size: 129
    }, null, null, {
    count: 11,
    size: 298
    }, {
    count: 12,
    size: 298
    }],
  steps: [null, `#pragma version 3
gtxna 0 ApplicationArgs 6
btoi
store 255
// Handler 1
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 7
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 0
int 0
itob
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:124:9:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 4
btoi
-
load 255
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 1
int 1
itob
gtxn 0 Sender
concat
load 255
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 4
btoi
int 0
==
assert
// Check time limits
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 6
store 255
gtxna 0 ApplicationArgs 7
btoi
store 254
// Handler 2
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 8
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 1
int 1
itob
load 255
concat
load 254
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:130:9:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 4
btoi
-
load 254
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
byte base64(AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==)
int 60
itob
concat
dup
store 253
substring 121 129
btoi
dup
store 251
int 11
<
load 251
int 110
>=
||
dup
store 250
bz l0
int 1
store 252
b l1
l0:
load 251
int 11
%
dup
store 249
int 0
==
load 249
int 10
==
||
bz l2
int 1
store 252
b l3
l2:
int 0
store 252
l3:
l1:
load 252
bz l4
int 1
store 249
b l5
l4:
load 250
bz l6
int 1
store 248
b l7
l6:
load 251
int 11
%
dup
store 247
int 0
==
load 247
int 10
==
||
bz l8
int 1
store 248
b l9
l8:
int 0
store 248
l9:
l7:
// Nothing
// "./index.rsh:41:10:application"
// "[at ./index.rsh:89:38:application call to \"catBlocked\" (defined at: ./index.rsh:40:25:function exp),at ./index.rsh:137:24:application call to \"gameOver\" (defined at: ./index.rsh:88:1:function exp)]"
load 248
!
assert
load 253
substring 0 121
store 247
load 251
int 11
-
store 246
load 251
int 11
+
store 245
load 247
load 251
int 1
-
getbyte
load 247
load 251
int 1
+
getbyte
&&
load 247
load 246
getbyte
&&
load 247
load 245
getbyte
&&
load 247
load 246
int 1
+
getbyte
&&
load 247
load 245
int 1
-
getbyte
&&
store 249
l5:
load 249
bz l10
load 250
bz l11
int 1
store 248
b l12
l11:
load 251
int 11
%
dup
store 247
int 0
==
load 247
int 10
==
||
bz l13
int 1
store 248
b l14
l13:
int 0
store 248
l14:
l12:
load 248
bz l15
int 1
store 247
b l16
l15:
load 250
bz l17
int 1
store 246
b l18
l17:
load 251
int 11
%
dup
store 245
int 0
==
load 245
int 10
==
||
bz l19
int 1
store 246
b l20
l19:
int 0
store 246
l20:
l18:
// Nothing
// "./index.rsh:41:10:application"
// "[at ./index.rsh:155:47:application call to \"catBlocked\" (defined at: ./index.rsh:40:25:function exp)]"
load 246
!
assert
load 253
substring 0 121
store 245
load 251
int 11
-
store 244
load 251
int 11
+
store 243
load 245
load 251
int 1
-
getbyte
load 245
load 251
int 1
+
getbyte
&&
load 245
load 244
getbyte
&&
load 245
load 243
getbyte
&&
load 245
load 244
int 1
+
getbyte
&&
load 245
load 243
int 1
-
getbyte
&&
store 247
l16:
load 250
bz l21
int 1
store 246
b l22
l21:
load 251
int 11
%
dup
store 245
int 0
==
load 245
int 10
==
||
bz l23
int 1
store 246
b l24
l23:
int 0
store 246
l24:
l22:
int 0
itob
int 2
itob
concat
int 2
itob
int 0
itob
concat
load 246
select
store 245
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 255
==
assert
gtxn 4 Amount
load 245
substring 0 8
btoi
load 254
*
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 TypeEnum
int pay
==
assert
gtxn 5 Receiver
gtxn 0 Sender
==
assert
gtxn 5 Amount
load 245
substring 8 16
btoi
load 254
*
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
gtxn 6 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 6 Amount
int 0
==
assert
gtxn 6 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 6 CloseRemainderTo
byte "{{Deployer}}"
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 7
==
assert
gtxna 0 ApplicationArgs 4
btoi
gtxn 4 Fee
gtxn 5 Fee
+
gtxn 6 Fee
+
==
assert
// Check time limits
gtxna 0 ApplicationArgs 5
btoi
int 10
+
dup
gtxn 0 LastValid
==
assert
dup
gtxn 1 LastValid
==
assert
dup
gtxn 2 LastValid
==
assert
dup
gtxn 3 LastValid
==
assert
dup
gtxn 4 LastValid
==
assert
dup
gtxn 5 LastValid
==
assert
dup
gtxn 6 LastValid
==
assert
pop
l10:
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 4
int 4
itob
load 255
concat
load 254
itob
concat
gtxn 0 Sender
concat
load 253
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 4
btoi
gtxn 4 Fee
gtxn 5 Fee
+
gtxn 6 Fee
+
==
assert
// Check time limits
gtxna 0 ApplicationArgs 5
btoi
int 10
+
dup
gtxn 0 LastValid
==
assert
dup
gtxn 1 LastValid
==
assert
dup
gtxn 2 LastValid
==
assert
dup
gtxn 3 LastValid
==
assert
pop
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 6
store 255
gtxna 0 ApplicationArgs 7
btoi
store 254
// Handler 3
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 8
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 1
int 1
itob
load 255
concat
load 254
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:131:41:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 4
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:131:41:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
load 255
gtxn 0 Sender
==
assert
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 255
==
assert
gtxn 4 Amount
load 254
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
gtxn 5 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 5 Amount
int 0
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 CloseRemainderTo
byte "{{Deployer}}"
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 6
==
assert
gtxna 0 ApplicationArgs 4
btoi
gtxn 4 Fee
gtxn 5 Fee
+
==
assert
// Check time limits
gtxna 0 ApplicationArgs 5
btoi
int 10
+
dup
gtxn 0 FirstValid
==
assert
dup
gtxn 1 FirstValid
==
assert
dup
gtxn 2 FirstValid
==
assert
dup
gtxn 3 FirstValid
==
assert
dup
gtxn 4 FirstValid
==
assert
dup
gtxn 5 FirstValid
==
assert
pop
done:
int 1
return
`, null, null, `#pragma version 3
gtxna 0 ApplicationArgs 6
store 255
gtxna 0 ApplicationArgs 7
btoi
store 254
gtxna 0 ApplicationArgs 8
store 253
gtxna 0 ApplicationArgs 9
store 252
gtxna 0 ApplicationArgs 10
btoi
store 251
// Handler 6
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 11
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 4
int 4
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:142:12:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 4
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "./index.rsh:142:12:dot"
// "[]"
load 255
gtxn 0 Sender
==
assert
load 252
substring 121 129
btoi
dup
store 248
int 11
<
load 248
int 110
>=
||
bz l0
int 1
store 249
b l1
l0:
load 248
int 11
%
dup
store 247
int 0
==
load 247
int 10
==
||
bz l2
int 1
store 249
b l3
l2:
int 0
store 249
l3:
l1:
// Nothing
// "./index.rsh:41:10:application"
// "[at ./index.rsh:68:22:application call to \"catBlocked\" (defined at: ./index.rsh:40:25:function exp),at ./index.rsh:144:37:application call to \"applyCatMove\" (defined at: ./index.rsh:67:1:function exp)]"
load 249
!
assert
load 252
substring 0 121
store 247
load 248
int 11
-
store 246
load 248
int 11
+
store 245
// Nothing
// "./index.rsh:68:10:application"
// "[at ./index.rsh:144:37:application call to \"applyCatMove\" (defined at: ./index.rsh:67:1:function exp)]"
load 247
load 248
int 1
-
getbyte
load 247
load 248
int 1
+
getbyte
&&
load 247
load 246
getbyte
&&
load 247
load 245
getbyte
&&
load 247
load 246
int 1
+
getbyte
&&
load 247
load 245
int 1
-
getbyte
&&
!
assert
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 6
int 6
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 251
itob
concat
load 247
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 4
btoi
int 0
==
assert
// Check time limits
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 6
store 255
gtxna 0 ApplicationArgs 7
btoi
store 254
gtxna 0 ApplicationArgs 8
store 253
gtxna 0 ApplicationArgs 9
btoi
store 252
gtxna 0 ApplicationArgs 10
store 251
gtxna 0 ApplicationArgs 11
btoi
store 250
// Handler 7
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 12
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 6
int 6
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 251
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:149:11:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 4
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "./index.rsh:149:11:dot"
// "[]"
load 253
gtxn 0 Sender
==
assert
// Nothing
// "./index.rsh:78:10:application"
// "[at ./index.rsh:151:33:application call to \"applyBlockerMove\" (defined at: ./index.rsh:76:1:function exp)]"
load 250
int 121
<
assert
load 251
load 250
int 1
setbyte
load 252
itob
concat
dup
store 249
substring 121 129
btoi
dup
store 247
int 11
<
load 247
int 110
>=
||
dup
store 246
bz l0
int 1
store 248
b l1
l0:
load 247
int 11
%
dup
store 245
int 0
==
load 245
int 10
==
||
bz l2
int 1
store 248
b l3
l2:
int 0
store 248
l3:
l1:
load 248
bz l4
int 1
store 245
b l5
l4:
load 246
bz l6
int 1
store 244
b l7
l6:
load 247
int 11
%
dup
store 243
int 0
==
load 243
int 10
==
||
bz l8
int 1
store 244
b l9
l8:
int 0
store 244
l9:
l7:
// Nothing
// "./index.rsh:41:10:application"
// "[at ./index.rsh:89:38:application call to \"catBlocked\" (defined at: ./index.rsh:40:25:function exp),at ./index.rsh:137:24:application call to \"gameOver\" (defined at: ./index.rsh:88:1:function exp)]"
load 244
!
assert
load 249
substring 0 121
store 243
load 247
int 11
-
store 242
load 247
int 11
+
store 241
load 243
load 247
int 1
-
getbyte
load 243
load 247
int 1
+
getbyte
&&
load 243
load 242
getbyte
&&
load 243
load 241
getbyte
&&
load 243
load 242
int 1
+
getbyte
&&
load 243
load 241
int 1
-
getbyte
&&
store 245
l5:
load 245
bz l10
load 246
bz l11
int 1
store 244
b l12
l11:
load 247
int 11
%
dup
store 243
int 0
==
load 243
int 10
==
||
bz l13
int 1
store 244
b l14
l13:
int 0
store 244
l14:
l12:
load 244
bz l15
int 1
store 243
b l16
l15:
load 246
bz l17
int 1
store 242
b l18
l17:
load 247
int 11
%
dup
store 241
int 0
==
load 241
int 10
==
||
bz l19
int 1
store 242
b l20
l19:
int 0
store 242
l20:
l18:
// Nothing
// "./index.rsh:41:10:application"
// "[at ./index.rsh:155:47:application call to \"catBlocked\" (defined at: ./index.rsh:40:25:function exp)]"
load 242
!
assert
load 249
substring 0 121
store 241
load 247
int 11
-
store 240
load 247
int 11
+
store 239
load 241
load 247
int 1
-
getbyte
load 241
load 247
int 1
+
getbyte
&&
load 241
load 240
getbyte
&&
load 241
load 239
getbyte
&&
load 241
load 240
int 1
+
getbyte
&&
load 241
load 239
int 1
-
getbyte
&&
store 243
l16:
load 246
bz l21
int 1
store 242
b l22
l21:
load 247
int 11
%
dup
store 241
int 0
==
load 241
int 10
==
||
bz l23
int 1
store 242
b l24
l23:
int 0
store 242
l24:
l22:
int 0
itob
int 2
itob
concat
int 2
itob
int 0
itob
concat
load 242
select
store 241
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 255
==
assert
gtxn 4 Amount
load 241
substring 0 8
btoi
load 254
*
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 TypeEnum
int pay
==
assert
gtxn 5 Receiver
load 253
==
assert
gtxn 5 Amount
load 241
substring 8 16
btoi
load 254
*
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
gtxn 6 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 6 Amount
int 0
==
assert
gtxn 6 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 6 CloseRemainderTo
byte "{{Deployer}}"
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 7
==
assert
gtxna 0 ApplicationArgs 4
btoi
gtxn 4 Fee
gtxn 5 Fee
+
gtxn 6 Fee
+
==
assert
// Check time limits
l10:
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 4
int 4
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 249
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 4
btoi
gtxn 4 Fee
gtxn 5 Fee
+
gtxn 6 Fee
+
==
assert
// Check time limits
done:
int 1
return
`],
  unsupported: false
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v267",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v272",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v271",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v272",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v275",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v271",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v272",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v275",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v271",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v272",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v279",
                "type": "address"
              },
              {
                "components": [
                  {
                    "internalType": "bool[121]",
                    "name": "blockers",
                    "type": "bool[121]"
                  },
                  {
                    "internalType": "uint256",
                    "name": "catIndex",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T6",
                "name": "v285",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v580",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v372",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v271",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v272",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v279",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v372",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v375",
                "type": "uint256"
              },
              {
                "internalType": "bool[121]",
                "name": "v394",
                "type": "bool[121]"
              }
            ],
            "internalType": "struct T15",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v446",
                "type": "uint256"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e7",
    "type": "event"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v267",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v272",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v271",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v272",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v275",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v271",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v272",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v275",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v271",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v272",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v279",
                "type": "address"
              },
              {
                "components": [
                  {
                    "internalType": "bool[121]",
                    "name": "blockers",
                    "type": "bool[121]"
                  },
                  {
                    "internalType": "uint256",
                    "name": "catIndex",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T6",
                "name": "v285",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v580",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v372",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v271",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v272",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v279",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v372",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v375",
                "type": "uint256"
              },
              {
                "internalType": "bool[121]",
                "name": "v394",
                "type": "bool[121]"
              }
            ],
            "internalType": "struct T15",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v446",
                "type": "uint256"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a16040805160208082018352438252825180820184526000808252925181528351808301849052905181850152835180820385018152606090910190935282519201919091209055611cd3806100826000396000f3fe60806040526004361061004e5760003560e01c80632438df701461005a578063356e93d01461006f5780633ede7321146100825780639532ef0114610095578063e163d7c4146100a857610055565b3661005557005b600080fd5b61006d610068366004611938565b6100bb565b005b61006d61007d366004611949565b61060c565b61006d610090366004611949565b610782565b61006d6100a3366004611965565b610b93565b61006d6100b6366004611938565b610ca9565b6040516100cf906001908390602001611bea565b6040516020818303038152906040528051906020012060001c600054146100f557600080fd5b60008055610101611666565b610110600a6040840135611bfe565b431061011b57600080fd5b3460208301351461012b57600080fd5b8051600090819052815160209081018290528251604090810183905283516060018390528351608001839052835160a001839052835160c001839052835160e00183905283516101000183905283516101200183905283516101400183905283516101600183905283516101800183905283516101a00183905283516101c00183905283516101e00183905283516102000183905283516102200183905283516102400183905283516102600183905283516102800183905283516102a00183905283516102c00183905283516102e00183905283516103000183905283516103200183905283516103400183905283516103600183905283516103800183905283516103a00183905283516103c00183905283516103e00183905283516104000183905283516104200183905283516104400183905283516104600183905283516104800183905283516104a00183905283516104c00183905283516104e00183905283516105000183905283516105200183905283516105400183905283516105600183905283516105800183905283516105a00183905283516105c00183905283516105e00183905283516106000183905283516106200183905283516106400183905283516106600183905283516106800183905283516106a00183905283516106c00183905283516106e00183905283516107000183905283516107200183905283516107400183905283516107600183905283516107800183905283516107a00183905283516107c00183905283516107e00183905283516108000183905283516108200183905283516108400183905283516108600183905283516108800183905283516108a00183905283516108c00183905283516108e00183905283516109000183905283516109200183905283516109400183905283516109600183905283516109800183905283516109a00183905283516109c00183905283516109e0018390528351610a00018390528351610a20018390528351610a40018390528351610a60018390528351610a80018390528351610aa0018390528351610ac0018390528351610ae0018390528351610b00018390528351610b20018390528351610b40018390528351610b60018390528351610b80018390528351610ba0018390528351610bc0018390528351610be0018390528351610c00018390528351610c20018390528351610c40018390528351610c60018390528351610c80018390528351610ca0018390528351610cc0018390528351610ce0018390528351610d00018390528351610d20018390528351610d40018390528351610d60018390528351610d80018390528351610da0018390528351610dc0018390528351610de0018390528351610e00018390528351610e20018390528351610e40018390528351610e60018390528351610e80018390528351610ea0018390528351610ec0018390528351610ee0018390528351610f000192909252825181840180519190915251603c910152517f1ca594b20641191c893d80895212a20239e99e17b7304a35c096140ec34f22dd906105a8908490611aa8565b60405180910390a16105b861168b565b6105c560208401846118fd565b81516001600160a01b03909116905280516020808501359181019190915281513360409091015282810151818301805191909152514391015261060781610db5565b505050565b604051610620906006908390602001611b74565b6040516020818303038152906040528051906020012060001c6000541461064657600080fd5b600080556106526116bb565b341561065d57600080fd5b3361066e60608401604085016118fd565b6001600160a01b03161461068157600080fd5b6079610fc08301351061069357600080fd5b60408051610f208181019092526106cc9160a085019060799083908390808284376000920191909152505050610fc0840135600161117b565b815152805160608301356020909101526040517f0c2104d4cf94bde911e41b0719860e26b95d6508135355c6b962504b7b5fbc3f9061070c908490611aed565b60405180910390a161071c61168b565b61072960208401846118fd565b81516001600160a01b039091169052805160208085013591015261075360608401604085016118fd565b81516001600160a01b039091166040909101528151602080830180519290925290514391015261060781610db5565b604051610796906004908390602001611afc565b6040516020818303038152906040528051906020012060001c600054146107bc57600080fd5b60008080556040805160808101825282815260208101839052908101829052606081019190915234156107ee57600080fd5b336107fc60208401846118fd565b6001600160a01b03161461080f57600080fd5b600b610f808301351061082b57606e610f80830135101561082e565b60015b1561083c576001815261087b565b61084c600b610f80840135611c67565b602082018190521561086557600a816020015114610868565b60015b15610876576001815261087b565b600081525b805161088857600161088b565b60005b61089457600080fd5b6108a4600b610f80840135611c35565b60408201526108b9600b610f80840135611bfe565b60608083019190915282016108d46001610f80850135611c35565b607981106108f257634e487b7160e01b600052603260045260246000fd5b602002016020810190610905919061191e565b610910576000610955565b606082016109246001610f80850135611bfe565b6079811061094257634e487b7160e01b600052603260045260246000fd5b602002016020810190610955919061191e565b61096057600061099b565b604081015160608301906079811061098857634e487b7160e01b600052603260045260246000fd5b60200201602081019061099b919061191e565b6109a65760006109e1565b60608181015190830190607981106109ce57634e487b7160e01b600052603260045260246000fd5b6020020160208101906109e1919061191e565b6109ec576000610a33565b60408101516060830190610a0290600190611bfe565b60798110610a2057634e487b7160e01b600052603260045260246000fd5b602002016020810190610a33919061191e565b610a3e576000610a85565b60608181015190830190610a5490600190611c35565b60798110610a7257634e487b7160e01b600052603260045260246000fd5b602002016020810190610a85919061191e565b610a90576001610a93565b60005b610a9c57600080fd5b7ff8446e74f0cc93e43ff36ab2064171b588128fe0e3f9d4872ce239fcdba4e1da82604051610acb9190611acf565b60405180910390a1610adb6116ce565b610ae860208401846118fd565b6001600160a01b0316815260208084013590820152610b0d60608401604085016118fd565b6001600160a01b0316604080830191909152610fc08401356060808401919091524360808401528151610f2081810190935291908501906079908390839080828437600092019190915250505060a0820152604051610b73906006908390602001611b89565b60408051601f198184030181529190528051602090910120600055505050565b60408051600060208201528235918101919091526060016040516020818303038152906040528051906020012060001c60005414610bd057600080fd5b6000805534602082013514610be457600080fd5b6040805182358152602080840135908201527ff2c62eba998811305a23599b2e6d212befbd7ded3a73f4c08bfb9aefe08dc166910160405180910390a1610c4e604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b338152602091820135828201908152436040808401918252805160018187015293516001600160a01b03168482015291516060840152516080808401919091528151808403909101815260a090920190528051910120600055565b604051610cbd906001908390602001611bea565b6040516020818303038152906040528051906020012060001c60005414610ce357600080fd5b60008055610cf6600a6040830135611bfe565b431015610d0257600080fd5b3415610d0d57600080fd5b33610d1b60208301836118fd565b6001600160a01b031614610d2e57600080fd5b610d3b60208201826118fd565b6040516001600160a01b039190911690602083013580156108fc02916000818181858888f19350505050158015610d76573d6000803e3d6000fd5b507fc3d6ba703f6ce931b1dd0e05e983d8be7c8ccc7f15219d844425151d8562301381604051610da69190611aa8565b60405180910390a16000805533ff5b604080516101008101825260008082526020808301829052928201819052606082018190526080820181905260a0820181905260c0820181905260e0820152828201515190910151600b11610e1657602080830151510151606e1115610e19565b60015b1580156020830152610e2e5760018152610e72565b602080830151510151610e4390600b90611c67565b6040820181905215610e5c57600a816040015114610e5f565b60015b15610e6d5760018152610e72565b600081525b805115610e8557600160e08201526110c3565b806020015115610e9b5760016060820152610ee5565b602080830151510151610eb090600b90611c67565b6080820181905215610ec957600a816080015114610ecc565b60015b15610edd5760016060820152610ee5565b600060608201525b8060600151610ef5576001610ef8565b60005b610f0157600080fd5b602080830151510151610f1690600b90611c35565b60a0820152602080830151510151610f3090600b90611bfe565b60c0820152602080830151518051910151610f4d90600190611c35565b60798110610f6b57634e487b7160e01b600052603260045260246000fd5b6020020151610f7b576000610fb7565b602080830151518051910151610f9390600190611bfe565b60798110610fb157634e487b7160e01b600052603260045260246000fd5b60200201515b610fc2576000610ff2565b6020820151515160a082015160798110610fec57634e487b7160e01b600052603260045260246000fd5b60200201515b610ffd57600061102d565b6020820151515160c08201516079811061102757634e487b7160e01b600052603260045260246000fd5b60200201515b611038576000611074565b6020820151515160a082015161105090600190611bfe565b6079811061106e57634e487b7160e01b600052603260045260246000fd5b60200201515b61107f5760006110bb565b6020820151515160c082015161109790600190611c35565b607981106110b557634e487b7160e01b600052603260045260246000fd5b60200201515b151560e08201525b8060e001511561111f576110d5611716565b82515181516001600160a01b039182169052835160209081015183518201528451604090810151845193169201919091528301515181516060015261111981611223565b50611177565b611127611736565b8251516001600160a01b03908116825283516020908101518184015284516040908101519092168284015280850180515160608501525181015160808401529051610b7391600491849101611b11565b5050565b61118361177d565b60005b60798110156111f0578481607981106111af57634e487b7160e01b600052603260045260246000fd5b60200201518282607981106111d457634e487b7160e01b600052603260045260246000fd5b91151560209092020152806111e881611c4c565b915050611186565b508181846079811061121257634e487b7160e01b600052603260045260246000fd5b911515602090920201529392505050565b61122b61179c565b81516060015160200151600b1161124f5781516060015160200151606e1115611252565b60015b158015602083015261126757600181526112ac565b8151606001516020015161127d90600b90611c67565b604082018190521561129657600a816040015114611299565b60015b156112a757600181526112ac565b600081525b8051156112bf57600160e0820152611504565b8060200151156112d55760016060820152611320565b815160600151602001516112eb90600b90611c67565b608082018190521561130457600a816080015114611307565b60015b156113185760016060820152611320565b600060608201525b8060600151611330576001611333565b60005b61133c57600080fd5b8151606001516020015161135290600b90611c35565b60a08201528151606001516020015161136d90600b90611bfe565b60c0820152815160600151805160209091015161138c90600190611c35565b607981106113aa57634e487b7160e01b600052603260045260246000fd5b60200201516113ba5760006113f8565b81516060015180516020909101516113d490600190611bfe565b607981106113f257634e487b7160e01b600052603260045260246000fd5b60200201515b611403576000611433565b8151606001515160a08201516079811061142d57634e487b7160e01b600052603260045260246000fd5b60200201515b61143e57600061146e565b8151606001515160c08201516079811061146857634e487b7160e01b600052603260045260246000fd5b60200201515b6114795760006114b5565b8151606001515160a082015161149190600190611bfe565b607981106114af57634e487b7160e01b600052603260045260246000fd5b60200201515b6114c05760006114fc565b8151606001515160c08201516114d890600190611c35565b607981106114f657634e487b7160e01b600052603260045260246000fd5b60200201515b151560e08201525b80602001511561151b57600161010082015261156a565b8151606001516020015161153190600b90611c67565b61012082018190521561154c57600a8161012001511461154f565b60015b1561156157600161010082015261156a565b60006101008201525b6101408101805160029081905290516000602091820181905261016084018051919091525101526101008101516115a6578061016001516115ad565b8061014001515b61018082018190528251805160209091015191516001600160a01b03909116916108fc916115db9190611c16565b6040518115909202916000818181858888f19350505050158015611603573d6000803e3d6000fd5b508160000151604001516001600160a01b03166108fc836000015160200151836101800151602001516116369190611c16565b6040518115909202916000818181858888f1935050505015801561165e573d6000803e3d6000fd5b506000805533ff5b604051806040016040528061167961177d565b8152602001611686611859565b905290565b6040805160a08101825260009181018281526060820183905260808201929092529081526020810161168661186c565b6040518060200160405280611686611859565b6040518060c0016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200161168661177d565b604051806040016040528061172961187f565b8152600060209091015290565b6040518060a0016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001611770611859565b8152602001600081525090565b60405180610f2001604052806079906020820280368337509192915050565b604051806101a001604052806000151581526020016000151581526020016000815260200160001515815260200160008152602001600081526020016000815260200160001515815260200160001515815260200160008152602001611815604051806040016040528060008152602001600081525090565b8152602001611837604051806040016040528060008152602001600081525090565b8152602001611686604051806040016040528060008152602001600081525090565b604051806040016040528061177061177d565b6040518060400160405280611770611859565b604051806080016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001611686611859565b80356001600160a01b03811681146118d057600080fd5b919050565b803580151581146118d057600080fd5b6000610fe082840312156118f7578081fd5b50919050565b60006020828403121561190e578081fd5b611917826118b9565b9392505050565b60006020828403121561192f578081fd5b611917826118d5565b6000608082840312156118f7578081fd5b6000610fe0828403121561195b578081fd5b61191783836118e5565b6000604082840312156118f7578081fd5b8060005b60798110156119a35761198c826118d5565b15158452602093840193919091019060010161197a565b50505050565b8060005b60798110156119a357815115158452602093840193909101906001016119ad565b6001600160a01b03806119e0836118b9565b16835260208201356020840152806119fa604084016118b9565b16604084015250611a116060830160608301611976565b610f808181013590830152610fa090810135910152565b6001600160a01b0380611a3a836118b9565b1683526020820135602084015280611a54604084016118b9565b16604084015250606081013560608301526080810135608083015261117760a0830160a08301611976565b6001600160a01b03611a90826118b9565b16825260208181013590830152604090810135910152565b60808101611ab68284611a7f565b611ac2606084016118d5565b1515606083015292915050565b610fe08101611ade82846119ce565b610fc092830135919092015290565b610fe08101611ade8284611a28565b828152610fe0810161191760208301846119ce565b6000610fe08201905083825260018060a01b0380845116602084015260208401516040840152806040850151166060840152506060830151611b576080840182516119a9565b60200151610fa083015260809290920151610fc090910152919050565b828152610fe081016119176020830184611a28565b6000610fe08201905083825260018060a01b03808451166020840152602084015160408401528060408501511660608401525060608301516080830152608083015160a083015260a0830151611be260c08401826119a9565b509392505050565b828152608081016119176020830184611a7f565b60008219821115611c1157611c11611c87565b500190565b6000816000190483118215151615611c3057611c30611c87565b500290565b600082821015611c4757611c47611c87565b500390565b6000600019821415611c6057611c60611c87565b5060010190565b600082611c8257634e487b7160e01b81526012600452602481fd5b500690565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220c4c207f0b5d1fb28d984618fbdb19e493b56395675c4719e9cfab9b718f72a8d64736f6c63430008020033`,
  deployMode: `DM_constructor`,
  views: {
    }
  };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };


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
  const ctc5 = stdlib.T_Tuple([ctc0, ctc2, ctc0, ctc2, ctc0, ctc0, ctc4, ctc3]);
  const ctc6 = stdlib.T_Tuple([ctc0, ctc2, ctc0, ctc2, ctc0, ctc4, ctc3]);
  const ctc7 = stdlib.T_Object({
    blockers: ctc4,
    catIndex: ctc0,
    ranBlocksInit: ctc3
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
  
  
  
  const txn1 = await (ctc.sendrecv(1, 1, stdlib.checkedBigNumberify('./index.rsh:136:9:dot', stdlib.UInt_max, 0), [ctc0, ctc0], [v267, v266], [v266, []], [ctc0], true, true, false, (async (txn1) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc14, [stdlib.checkedBigNumberify('./index.rsh:136:9:dot', stdlib.UInt_max, 0), v267]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc1, [stdlib.checkedBigNumberify('./index.rsh:136:9:dot', stdlib.UInt_max, 0)]);
    const [v272] = txn1.data;
    const v275 = txn1.time;
    const v271 = txn1.from;
    
    sim_r.txns.push({
      amt: v272,
      kind: 'to',
      tok: undefined
      });
    sim_r.nextSt = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:138:15:after expr stmt semicolon', stdlib.UInt_max, 1), v271, v272, v275]);
    sim_r.nextSt_noTime = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('./index.rsh:138:15:after expr stmt semicolon', stdlib.UInt_max, 1), v271, v272]);
    sim_r.view = [ctc1, [stdlib.checkedBigNumberify('./index.rsh:138:15:after expr stmt semicolon', stdlib.UInt_max, 0)]];
    sim_r.isHalt = false;
    
    return sim_r;
    })));
  const [v272] = txn1.data;
  const v275 = txn1.time;
  const v271 = txn1.from;
  ;
  const txn2 = await (ctc.recv(2, 0, [], false, stdlib.checkedBigNumberify('./index.rsh:123:18:decimal', stdlib.UInt_max, 10)));
  if (txn2.didTimeout) {
    
    const txn3 = await (ctc.sendrecv(3, 0, stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 2), [ctc2, ctc0, ctc0], [v271, v272, v275], [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []], [], true, true, false, (async (txn3) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 1), v271, v272, v275]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 1), v271, v272]);
      const [] = txn3.data;
      const v566 = txn3.time;
      const v563 = txn3.from;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v565 = stdlib.addressEq(v271, v563);
      stdlib.assert(v565, {
        at: 'reach standard library:209:7:dot',
        fs: ['at ./index.rsh:144:41:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
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
    const v566 = txn3.time;
    const v563 = txn3.from;
    ;
    const v565 = stdlib.addressEq(v271, v563);
    stdlib.assert(v565, {
      at: 'reach standard library:209:7:dot',
      fs: ['at ./index.rsh:144:41:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'sender correct',
      who: 'Alice'
      });
    ;
    stdlib.protect(ctc10, await interact.informTimeout(), {
      at: './index.rsh:132:33:application',
      fs: ['at ./index.rsh:131:13:application call to [unknown function] (defined at: ./index.rsh:131:25:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:130:32:function exp)', 'at ./index.rsh:144:41:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
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
      catIndex: stdlib.checkedBigNumberify('./index.rsh:15:18:decimal', stdlib.UInt_max, 60),
      ranBlocksInit: false
      };
    let v285 = v287;
    let v581 = v282;
    
    while ((() => {
      let v292;
      const v293 = v285.catIndex;
      const v294 = stdlib.lt(v293, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
      const v295 = stdlib.ge(v293, stdlib.checkedBigNumberify('./index.rsh:28:28:application', stdlib.UInt_max, 110));
      const v296 = v294 ? true : v295;
      if (v296) {
        v292 = true;
        }
      else {
        const v298 = stdlib.mod(v293, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
        const v299 = stdlib.eq(v298, stdlib.checkedBigNumberify('./index.rsh:32:23:decimal', stdlib.UInt_max, 0));
        const v301 = stdlib.eq(v298, stdlib.checkedBigNumberify('./index.rsh:32:45:application', stdlib.UInt_max, 10));
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
          const v313 = stdlib.eq(v312, stdlib.checkedBigNumberify('./index.rsh:32:23:decimal', stdlib.UInt_max, 0));
          const v315 = stdlib.eq(v312, stdlib.checkedBigNumberify('./index.rsh:32:45:application', stdlib.UInt_max, 10));
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
          at: './index.rsh:44:10:application',
          fs: ['at ./index.rsh:100:38:application call to "catBlocked" (defined at: ./index.rsh:43:25:function exp)', 'at ./index.rsh:150:24:application call to "gameOver" (defined at: ./index.rsh:99:1:function exp)'],
          msg: null,
          who: 'Alice'
          });
        const v322 = v285.blockers;
        const v324 = stdlib.sub(v293, stdlib.checkedBigNumberify('./index.rsh:47:36:decimal', stdlib.UInt_max, 1));
        const v326 = v322[v324];
        const v329 = stdlib.add(v293, stdlib.checkedBigNumberify('./index.rsh:47:68:decimal', stdlib.UInt_max, 1));
        const v331 = v322[v329];
        const v332 = v326 ? v331 : false;
        const v335 = stdlib.sub(v293, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
        const v337 = v322[v335];
        const v338 = v332 ? v337 : false;
        const v341 = stdlib.add(v293, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
        const v343 = v322[v341];
        const v344 = v338 ? v343 : false;
        const v348 = stdlib.add(v335, stdlib.checkedBigNumberify('./index.rsh:49:36:decimal', stdlib.UInt_max, 1));
        const v350 = v322[v348];
        const v351 = v344 ? v350 : false;
        const v355 = stdlib.add(v341, stdlib.checkedBigNumberify('./index.rsh:49:75:decimal', stdlib.UInt_max, 1));
        const v357 = v322[v355];
        const v358 = v351 ? v357 : false;
        v360 = v358;
        }
      const v363 = v360 ? false : true;
      
      return v363;})()) {
      const v369 = stdlib.protect(ctc0, await interact.getMove(v285), {
        at: './index.rsh:56:36:application',
        fs: ['at ./index.rsh:154:43:application call to "getValidCatMove" (defined at: ./index.rsh:53:1:function exp)', 'at ./index.rsh:153:16:application call to [unknown function] (defined at: ./index.rsh:153:20:function exp)'],
        msg: 'getMove',
        who: 'Alice'
        });
      
      
      const txn3 = await (ctc.sendrecv(6, 1, stdlib.checkedBigNumberify('./index.rsh:155:12:dot', stdlib.UInt_max, 4), [ctc2, ctc0, ctc2, ctc7, ctc0, ctc0], [v271, v272, v279, v285, v581, v369], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc0], true, true, false, (async (txn3) => {
        const sim_r = { txns: [] };
        sim_r.prevSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:155:12:dot', stdlib.UInt_max, 4), v271, v272, v279, v285, v581]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:155:12:dot', stdlib.UInt_max, 4), v271, v272, v279, v285]);
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
          at: './index.rsh:155:12:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        let v378;
        const v379 = v285.catIndex;
        const v380 = stdlib.lt(v379, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
        const v381 = stdlib.ge(v379, stdlib.checkedBigNumberify('./index.rsh:28:28:application', stdlib.UInt_max, 110));
        const v382 = v380 ? true : v381;
        if (v382) {
          v378 = true;
          }
        else {
          const v384 = stdlib.mod(v379, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
          const v385 = stdlib.eq(v384, stdlib.checkedBigNumberify('./index.rsh:32:23:decimal', stdlib.UInt_max, 0));
          const v387 = stdlib.eq(v384, stdlib.checkedBigNumberify('./index.rsh:32:45:application', stdlib.UInt_max, 10));
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
          at: './index.rsh:44:10:application',
          fs: ['at ./index.rsh:77:22:application call to "catBlocked" (defined at: ./index.rsh:43:25:function exp)', 'at ./index.rsh:157:37:application call to "applyCatMove" (defined at: ./index.rsh:76:1:function exp)'],
          msg: null,
          who: 'Alice'
          });
        const v394 = v285.blockers;
        const v396 = stdlib.sub(v379, stdlib.checkedBigNumberify('./index.rsh:47:36:decimal', stdlib.UInt_max, 1));
        const v398 = v394[v396];
        const v401 = stdlib.add(v379, stdlib.checkedBigNumberify('./index.rsh:47:68:decimal', stdlib.UInt_max, 1));
        const v403 = v394[v401];
        const v404 = v398 ? v403 : false;
        const v407 = stdlib.sub(v379, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
        const v409 = v394[v407];
        const v410 = v404 ? v409 : false;
        const v413 = stdlib.add(v379, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
        const v415 = v394[v413];
        const v416 = v410 ? v415 : false;
        const v420 = stdlib.add(v407, stdlib.checkedBigNumberify('./index.rsh:49:36:decimal', stdlib.UInt_max, 1));
        const v422 = v394[v420];
        const v423 = v416 ? v422 : false;
        const v427 = stdlib.add(v413, stdlib.checkedBigNumberify('./index.rsh:49:75:decimal', stdlib.UInt_max, 1));
        const v429 = v394[v427];
        const v430 = v423 ? v429 : false;
        const v433 = v430 ? false : true;
        stdlib.assert(v433, {
          at: './index.rsh:77:10:application',
          fs: ['at ./index.rsh:157:37:application call to "applyCatMove" (defined at: ./index.rsh:76:1:function exp)'],
          msg: null,
          who: 'Alice'
          });
        const v436 = v285.ranBlocksInit;
        sim_r.nextSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:158:18:after expr stmt semicolon', stdlib.UInt_max, 6), v271, v272, v279, v372, v375, v394, v436]);
        sim_r.nextSt_noTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:158:18:after expr stmt semicolon', stdlib.UInt_max, 6), v271, v272, v279, v372, v394, v436]);
        sim_r.view = [ctc1, [stdlib.checkedBigNumberify('./index.rsh:158:18:after expr stmt semicolon', stdlib.UInt_max, 0)]];
        sim_r.isHalt = false;
        
        return sim_r;
        })));
      const [v372] = txn3.data;
      const v375 = txn3.time;
      const v371 = txn3.from;
      ;
      const v374 = stdlib.addressEq(v271, v371);
      stdlib.assert(v374, {
        at: './index.rsh:155:12:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      let v378;
      const v379 = v285.catIndex;
      const v380 = stdlib.lt(v379, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
      const v381 = stdlib.ge(v379, stdlib.checkedBigNumberify('./index.rsh:28:28:application', stdlib.UInt_max, 110));
      const v382 = v380 ? true : v381;
      if (v382) {
        v378 = true;
        }
      else {
        const v384 = stdlib.mod(v379, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
        const v385 = stdlib.eq(v384, stdlib.checkedBigNumberify('./index.rsh:32:23:decimal', stdlib.UInt_max, 0));
        const v387 = stdlib.eq(v384, stdlib.checkedBigNumberify('./index.rsh:32:45:application', stdlib.UInt_max, 10));
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
        at: './index.rsh:44:10:application',
        fs: ['at ./index.rsh:77:22:application call to "catBlocked" (defined at: ./index.rsh:43:25:function exp)', 'at ./index.rsh:157:37:application call to "applyCatMove" (defined at: ./index.rsh:76:1:function exp)'],
        msg: null,
        who: 'Alice'
        });
      const v394 = v285.blockers;
      const v396 = stdlib.sub(v379, stdlib.checkedBigNumberify('./index.rsh:47:36:decimal', stdlib.UInt_max, 1));
      const v398 = v394[v396];
      const v401 = stdlib.add(v379, stdlib.checkedBigNumberify('./index.rsh:47:68:decimal', stdlib.UInt_max, 1));
      const v403 = v394[v401];
      const v404 = v398 ? v403 : false;
      const v407 = stdlib.sub(v379, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
      const v409 = v394[v407];
      const v410 = v404 ? v409 : false;
      const v413 = stdlib.add(v379, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
      const v415 = v394[v413];
      const v416 = v410 ? v415 : false;
      const v420 = stdlib.add(v407, stdlib.checkedBigNumberify('./index.rsh:49:36:decimal', stdlib.UInt_max, 1));
      const v422 = v394[v420];
      const v423 = v416 ? v422 : false;
      const v427 = stdlib.add(v413, stdlib.checkedBigNumberify('./index.rsh:49:75:decimal', stdlib.UInt_max, 1));
      const v429 = v394[v427];
      const v430 = v423 ? v429 : false;
      const v433 = v430 ? false : true;
      stdlib.assert(v433, {
        at: './index.rsh:77:10:application',
        fs: ['at ./index.rsh:157:37:application call to "applyCatMove" (defined at: ./index.rsh:76:1:function exp)'],
        msg: null,
        who: 'Alice'
        });
      const v436 = v285.ranBlocksInit;
      const txn4 = await (ctc.recv(7, 1, [ctc0], false, false));
      const [v447] = txn4.data;
      const v450 = txn4.time;
      const v446 = txn4.from;
      ;
      const v449 = stdlib.addressEq(v279, v446);
      stdlib.assert(v449, {
        at: './index.rsh:162:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v452 = stdlib.lt(v447, stdlib.checkedBigNumberify('./index.rsh:88:15:decimal', stdlib.UInt_max, 121));
      stdlib.assert(v452, {
        at: './index.rsh:88:10:application',
        fs: ['at ./index.rsh:164:33:application call to "applyBlockerMove" (defined at: ./index.rsh:86:1:function exp)'],
        msg: null,
        who: 'Alice'
        });
      const v454 = stdlib.Array_set(v394, v447, true);
      const v456 = {
        blockers: v454,
        catIndex: v372,
        ranBlocksInit: v436
        };
      const cv285 = v456;
      const cv581 = v450;
      
      v285 = cv285;
      v581 = cv581;
      
      continue;
      
      }
    let v457;
    const v458 = v285.catIndex;
    const v459 = stdlib.lt(v458, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
    const v460 = stdlib.ge(v458, stdlib.checkedBigNumberify('./index.rsh:28:28:application', stdlib.UInt_max, 110));
    const v461 = v459 ? true : v460;
    if (v461) {
      v457 = true;
      }
    else {
      const v463 = stdlib.mod(v458, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
      const v464 = stdlib.eq(v463, stdlib.checkedBigNumberify('./index.rsh:32:23:decimal', stdlib.UInt_max, 0));
      const v466 = stdlib.eq(v463, stdlib.checkedBigNumberify('./index.rsh:32:45:application', stdlib.UInt_max, 10));
      const v467 = v464 ? true : v466;
      if (v467) {
        v457 = true;
        }
      else {
        v457 = false;
        }
      }
    let v525;
    if (v457) {
      v525 = true;
      }
    else {
      let v471;
      if (v461) {
        v471 = true;
        }
      else {
        const v477 = stdlib.mod(v458, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
        const v478 = stdlib.eq(v477, stdlib.checkedBigNumberify('./index.rsh:32:23:decimal', stdlib.UInt_max, 0));
        const v480 = stdlib.eq(v477, stdlib.checkedBigNumberify('./index.rsh:32:45:application', stdlib.UInt_max, 10));
        const v481 = v478 ? true : v480;
        if (v481) {
          v471 = true;
          }
        else {
          v471 = false;
          }
        }
      const v485 = v471 ? false : true;
      stdlib.assert(v485, {
        at: './index.rsh:44:10:application',
        fs: ['at ./index.rsh:168:47:application call to "catBlocked" (defined at: ./index.rsh:43:25:function exp)'],
        msg: null,
        who: 'Alice'
        });
      const v487 = v285.blockers;
      const v489 = stdlib.sub(v458, stdlib.checkedBigNumberify('./index.rsh:47:36:decimal', stdlib.UInt_max, 1));
      const v491 = v487[v489];
      const v494 = stdlib.add(v458, stdlib.checkedBigNumberify('./index.rsh:47:68:decimal', stdlib.UInt_max, 1));
      const v496 = v487[v494];
      const v497 = v491 ? v496 : false;
      const v500 = stdlib.sub(v458, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
      const v502 = v487[v500];
      const v503 = v497 ? v502 : false;
      const v506 = stdlib.add(v458, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
      const v508 = v487[v506];
      const v509 = v503 ? v508 : false;
      const v513 = stdlib.add(v500, stdlib.checkedBigNumberify('./index.rsh:49:36:decimal', stdlib.UInt_max, 1));
      const v515 = v487[v513];
      const v516 = v509 ? v515 : false;
      const v520 = stdlib.add(v506, stdlib.checkedBigNumberify('./index.rsh:49:75:decimal', stdlib.UInt_max, 1));
      const v522 = v487[v520];
      const v523 = v516 ? v522 : false;
      v525 = v523;
      }
    let v526;
    if (v461) {
      v526 = true;
      }
    else {
      const v532 = stdlib.mod(v458, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
      const v533 = stdlib.eq(v532, stdlib.checkedBigNumberify('./index.rsh:32:23:decimal', stdlib.UInt_max, 0));
      const v535 = stdlib.eq(v532, stdlib.checkedBigNumberify('./index.rsh:32:45:application', stdlib.UInt_max, 10));
      const v536 = v533 ? true : v535;
      if (v536) {
        v526 = true;
        }
      else {
        v526 = false;
        }
      }
    const v539 = [stdlib.checkedBigNumberify('./index.rsh:169:50:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:169:53:decimal', stdlib.UInt_max, 0)];
    const v540 = [stdlib.checkedBigNumberify('./index.rsh:169:59:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:169:62:decimal', stdlib.UInt_max, 2)];
    const v541 = v526 ? v539 : v540;
    const v542 = v541[stdlib.checkedBigNumberify('./index.rsh:169:15:array', stdlib.UInt_max, 0)];
    const v543 = v541[stdlib.checkedBigNumberify('./index.rsh:169:15:array', stdlib.UInt_max, 1)];
    const v544 = stdlib.mul(v542, v272);
    ;
    const v549 = stdlib.mul(v543, v272);
    ;
    stdlib.protect(ctc10, await interact.doneState(v285), {
      at: './index.rsh:175:27:application',
      fs: ['at ./index.rsh:174:11:application call to [unknown function] (defined at: ./index.rsh:174:23:function exp)'],
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
    catIndex: ctc0,
    ranBlocksInit: ctc4
    });
  const ctc7 = stdlib.T_Tuple([ctc0, ctc3, ctc0, ctc3, ctc6, ctc0]);
  const ctc8 = stdlib.T_Tuple([ctc0, ctc3, ctc0, ctc3, ctc6]);
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc0, ctc3, ctc0, ctc3, ctc0, ctc0, ctc5, ctc4]);
  const ctc11 = stdlib.T_Tuple([ctc0, ctc3, ctc0, ctc3, ctc0, ctc5, ctc4]);
  const ctc12 = stdlib.T_Tuple([ctc0, ctc3, ctc0, ctc0]);
  const ctc13 = stdlib.T_Tuple([ctc0, ctc3, ctc0]);
  
  
  const v267 = await ctc.creationTime();
  
  const txn1 = await (ctc.recv(1, 1, [ctc0], false, false));
  const [v272] = txn1.data;
  const v275 = txn1.time;
  const v271 = txn1.from;
  ;
  stdlib.protect(ctc1, await interact.acceptWager(v272), {
    at: './index.rsh:141:29:application',
    fs: ['at ./index.rsh:140:13:application call to [unknown function] (defined at: ./index.rsh:140:17:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  
  const txn2 = await (ctc.sendrecv(2, 0, stdlib.checkedBigNumberify('./index.rsh:143:9:dot', stdlib.UInt_max, 2), [ctc3, ctc0, ctc0], [v271, v272, v275], [v272, []], [], true, true, stdlib.checkedBigNumberify('./index.rsh:123:18:decimal', stdlib.UInt_max, 10), (async (txn2) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:143:9:dot', stdlib.UInt_max, 1), v271, v272, v275]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('./index.rsh:143:9:dot', stdlib.UInt_max, 1), v271, v272]);
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
      catIndex: stdlib.checkedBigNumberify('./index.rsh:15:18:decimal', stdlib.UInt_max, 60),
      ranBlocksInit: false
      };
    const v285 = v287;
    const v581 = v282;
    
    if ((() => {
      let v292;
      const v293 = v285.catIndex;
      const v294 = stdlib.lt(v293, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
      const v295 = stdlib.ge(v293, stdlib.checkedBigNumberify('./index.rsh:28:28:application', stdlib.UInt_max, 110));
      const v296 = v294 ? true : v295;
      if (v296) {
        v292 = true;
        }
      else {
        const v298 = stdlib.mod(v293, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
        const v299 = stdlib.eq(v298, stdlib.checkedBigNumberify('./index.rsh:32:23:decimal', stdlib.UInt_max, 0));
        const v301 = stdlib.eq(v298, stdlib.checkedBigNumberify('./index.rsh:32:45:application', stdlib.UInt_max, 10));
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
          const v313 = stdlib.eq(v312, stdlib.checkedBigNumberify('./index.rsh:32:23:decimal', stdlib.UInt_max, 0));
          const v315 = stdlib.eq(v312, stdlib.checkedBigNumberify('./index.rsh:32:45:application', stdlib.UInt_max, 10));
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
          at: './index.rsh:44:10:application',
          fs: ['at ./index.rsh:100:38:application call to "catBlocked" (defined at: ./index.rsh:43:25:function exp)', 'at ./index.rsh:150:24:application call to "gameOver" (defined at: ./index.rsh:99:1:function exp)'],
          msg: null,
          who: 'Bob'
          });
        const v322 = v285.blockers;
        const v324 = stdlib.sub(v293, stdlib.checkedBigNumberify('./index.rsh:47:36:decimal', stdlib.UInt_max, 1));
        const v326 = v322[v324];
        const v329 = stdlib.add(v293, stdlib.checkedBigNumberify('./index.rsh:47:68:decimal', stdlib.UInt_max, 1));
        const v331 = v322[v329];
        const v332 = v326 ? v331 : false;
        const v335 = stdlib.sub(v293, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
        const v337 = v322[v335];
        const v338 = v332 ? v337 : false;
        const v341 = stdlib.add(v293, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
        const v343 = v322[v341];
        const v344 = v338 ? v343 : false;
        const v348 = stdlib.add(v335, stdlib.checkedBigNumberify('./index.rsh:49:36:decimal', stdlib.UInt_max, 1));
        const v350 = v322[v348];
        const v351 = v344 ? v350 : false;
        const v355 = stdlib.add(v341, stdlib.checkedBigNumberify('./index.rsh:49:75:decimal', stdlib.UInt_max, 1));
        const v357 = v322[v355];
        const v358 = v351 ? v357 : false;
        v360 = v358;
        }
      const v363 = v360 ? false : true;
      
      return v363;})()) {
      sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:151:19:after expr stmt semicolon', stdlib.UInt_max, 4), v271, v272, v279, v285, v581]);
      sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:151:19:after expr stmt semicolon', stdlib.UInt_max, 4), v271, v272, v279, v285]);
      sim_r.view = [ctc2, [stdlib.checkedBigNumberify('./index.rsh:151:19:after expr stmt semicolon', stdlib.UInt_max, 0)]];
      sim_r.isHalt = false;
      }
    else {
      let v457;
      const v458 = v285.catIndex;
      const v459 = stdlib.lt(v458, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
      const v460 = stdlib.ge(v458, stdlib.checkedBigNumberify('./index.rsh:28:28:application', stdlib.UInt_max, 110));
      const v461 = v459 ? true : v460;
      if (v461) {
        v457 = true;
        }
      else {
        const v463 = stdlib.mod(v458, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
        const v464 = stdlib.eq(v463, stdlib.checkedBigNumberify('./index.rsh:32:23:decimal', stdlib.UInt_max, 0));
        const v466 = stdlib.eq(v463, stdlib.checkedBigNumberify('./index.rsh:32:45:application', stdlib.UInt_max, 10));
        const v467 = v464 ? true : v466;
        if (v467) {
          v457 = true;
          }
        else {
          v457 = false;
          }
        }
      let v525;
      if (v457) {
        v525 = true;
        }
      else {
        let v471;
        if (v461) {
          v471 = true;
          }
        else {
          const v477 = stdlib.mod(v458, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
          const v478 = stdlib.eq(v477, stdlib.checkedBigNumberify('./index.rsh:32:23:decimal', stdlib.UInt_max, 0));
          const v480 = stdlib.eq(v477, stdlib.checkedBigNumberify('./index.rsh:32:45:application', stdlib.UInt_max, 10));
          const v481 = v478 ? true : v480;
          if (v481) {
            v471 = true;
            }
          else {
            v471 = false;
            }
          }
        const v485 = v471 ? false : true;
        stdlib.assert(v485, {
          at: './index.rsh:44:10:application',
          fs: ['at ./index.rsh:168:47:application call to "catBlocked" (defined at: ./index.rsh:43:25:function exp)'],
          msg: null,
          who: 'Bob'
          });
        const v487 = v285.blockers;
        const v489 = stdlib.sub(v458, stdlib.checkedBigNumberify('./index.rsh:47:36:decimal', stdlib.UInt_max, 1));
        const v491 = v487[v489];
        const v494 = stdlib.add(v458, stdlib.checkedBigNumberify('./index.rsh:47:68:decimal', stdlib.UInt_max, 1));
        const v496 = v487[v494];
        const v497 = v491 ? v496 : false;
        const v500 = stdlib.sub(v458, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
        const v502 = v487[v500];
        const v503 = v497 ? v502 : false;
        const v506 = stdlib.add(v458, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
        const v508 = v487[v506];
        const v509 = v503 ? v508 : false;
        const v513 = stdlib.add(v500, stdlib.checkedBigNumberify('./index.rsh:49:36:decimal', stdlib.UInt_max, 1));
        const v515 = v487[v513];
        const v516 = v509 ? v515 : false;
        const v520 = stdlib.add(v506, stdlib.checkedBigNumberify('./index.rsh:49:75:decimal', stdlib.UInt_max, 1));
        const v522 = v487[v520];
        const v523 = v516 ? v522 : false;
        v525 = v523;
        }
      let v526;
      if (v461) {
        v526 = true;
        }
      else {
        const v532 = stdlib.mod(v458, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
        const v533 = stdlib.eq(v532, stdlib.checkedBigNumberify('./index.rsh:32:23:decimal', stdlib.UInt_max, 0));
        const v535 = stdlib.eq(v532, stdlib.checkedBigNumberify('./index.rsh:32:45:application', stdlib.UInt_max, 10));
        const v536 = v533 ? true : v535;
        if (v536) {
          v526 = true;
          }
        else {
          v526 = false;
          }
        }
      const v539 = [stdlib.checkedBigNumberify('./index.rsh:169:50:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:169:53:decimal', stdlib.UInt_max, 0)];
      const v540 = [stdlib.checkedBigNumberify('./index.rsh:169:59:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:169:62:decimal', stdlib.UInt_max, 2)];
      const v541 = v526 ? v539 : v540;
      const v542 = v541[stdlib.checkedBigNumberify('./index.rsh:169:15:array', stdlib.UInt_max, 0)];
      const v543 = v541[stdlib.checkedBigNumberify('./index.rsh:169:15:array', stdlib.UInt_max, 1)];
      const v544 = stdlib.mul(v542, v272);
      sim_r.txns.push({
        amt: v544,
        kind: 'from',
        to: v271,
        tok: undefined
        });
      const v549 = stdlib.mul(v543, v272);
      sim_r.txns.push({
        amt: v549,
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
      sim_r.view = [ctc2, [stdlib.checkedBigNumberify('./index.rsh:172:17:after expr stmt semicolon', stdlib.UInt_max, 0)]];
      sim_r.isHalt = true;
      }
    return sim_r;
    })));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.recv(3, 0, [], false, false));
    const [] = txn3.data;
    const v566 = txn3.time;
    const v563 = txn3.from;
    ;
    const v565 = stdlib.addressEq(v271, v563);
    stdlib.assert(v565, {
      at: 'reach standard library:209:7:dot',
      fs: ['at ./index.rsh:144:41:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'sender correct',
      who: 'Bob'
      });
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:132:33:application',
      fs: ['at ./index.rsh:131:13:application call to [unknown function] (defined at: ./index.rsh:131:25:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:130:32:function exp)', 'at ./index.rsh:144:41:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
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
      catIndex: stdlib.checkedBigNumberify('./index.rsh:15:18:decimal', stdlib.UInt_max, 60),
      ranBlocksInit: false
      };
    let v285 = v287;
    let v581 = v282;
    
    while ((() => {
      let v292;
      const v293 = v285.catIndex;
      const v294 = stdlib.lt(v293, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
      const v295 = stdlib.ge(v293, stdlib.checkedBigNumberify('./index.rsh:28:28:application', stdlib.UInt_max, 110));
      const v296 = v294 ? true : v295;
      if (v296) {
        v292 = true;
        }
      else {
        const v298 = stdlib.mod(v293, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
        const v299 = stdlib.eq(v298, stdlib.checkedBigNumberify('./index.rsh:32:23:decimal', stdlib.UInt_max, 0));
        const v301 = stdlib.eq(v298, stdlib.checkedBigNumberify('./index.rsh:32:45:application', stdlib.UInt_max, 10));
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
          const v313 = stdlib.eq(v312, stdlib.checkedBigNumberify('./index.rsh:32:23:decimal', stdlib.UInt_max, 0));
          const v315 = stdlib.eq(v312, stdlib.checkedBigNumberify('./index.rsh:32:45:application', stdlib.UInt_max, 10));
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
          at: './index.rsh:44:10:application',
          fs: ['at ./index.rsh:100:38:application call to "catBlocked" (defined at: ./index.rsh:43:25:function exp)', 'at ./index.rsh:150:24:application call to "gameOver" (defined at: ./index.rsh:99:1:function exp)'],
          msg: null,
          who: 'Bob'
          });
        const v322 = v285.blockers;
        const v324 = stdlib.sub(v293, stdlib.checkedBigNumberify('./index.rsh:47:36:decimal', stdlib.UInt_max, 1));
        const v326 = v322[v324];
        const v329 = stdlib.add(v293, stdlib.checkedBigNumberify('./index.rsh:47:68:decimal', stdlib.UInt_max, 1));
        const v331 = v322[v329];
        const v332 = v326 ? v331 : false;
        const v335 = stdlib.sub(v293, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
        const v337 = v322[v335];
        const v338 = v332 ? v337 : false;
        const v341 = stdlib.add(v293, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
        const v343 = v322[v341];
        const v344 = v338 ? v343 : false;
        const v348 = stdlib.add(v335, stdlib.checkedBigNumberify('./index.rsh:49:36:decimal', stdlib.UInt_max, 1));
        const v350 = v322[v348];
        const v351 = v344 ? v350 : false;
        const v355 = stdlib.add(v341, stdlib.checkedBigNumberify('./index.rsh:49:75:decimal', stdlib.UInt_max, 1));
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
        at: './index.rsh:155:12:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      let v378;
      const v379 = v285.catIndex;
      const v380 = stdlib.lt(v379, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
      const v381 = stdlib.ge(v379, stdlib.checkedBigNumberify('./index.rsh:28:28:application', stdlib.UInt_max, 110));
      const v382 = v380 ? true : v381;
      if (v382) {
        v378 = true;
        }
      else {
        const v384 = stdlib.mod(v379, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
        const v385 = stdlib.eq(v384, stdlib.checkedBigNumberify('./index.rsh:32:23:decimal', stdlib.UInt_max, 0));
        const v387 = stdlib.eq(v384, stdlib.checkedBigNumberify('./index.rsh:32:45:application', stdlib.UInt_max, 10));
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
        at: './index.rsh:44:10:application',
        fs: ['at ./index.rsh:77:22:application call to "catBlocked" (defined at: ./index.rsh:43:25:function exp)', 'at ./index.rsh:157:37:application call to "applyCatMove" (defined at: ./index.rsh:76:1:function exp)'],
        msg: null,
        who: 'Bob'
        });
      const v394 = v285.blockers;
      const v396 = stdlib.sub(v379, stdlib.checkedBigNumberify('./index.rsh:47:36:decimal', stdlib.UInt_max, 1));
      const v398 = v394[v396];
      const v401 = stdlib.add(v379, stdlib.checkedBigNumberify('./index.rsh:47:68:decimal', stdlib.UInt_max, 1));
      const v403 = v394[v401];
      const v404 = v398 ? v403 : false;
      const v407 = stdlib.sub(v379, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
      const v409 = v394[v407];
      const v410 = v404 ? v409 : false;
      const v413 = stdlib.add(v379, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
      const v415 = v394[v413];
      const v416 = v410 ? v415 : false;
      const v420 = stdlib.add(v407, stdlib.checkedBigNumberify('./index.rsh:49:36:decimal', stdlib.UInt_max, 1));
      const v422 = v394[v420];
      const v423 = v416 ? v422 : false;
      const v427 = stdlib.add(v413, stdlib.checkedBigNumberify('./index.rsh:49:75:decimal', stdlib.UInt_max, 1));
      const v429 = v394[v427];
      const v430 = v423 ? v429 : false;
      const v433 = v430 ? false : true;
      stdlib.assert(v433, {
        at: './index.rsh:77:10:application',
        fs: ['at ./index.rsh:157:37:application call to "applyCatMove" (defined at: ./index.rsh:76:1:function exp)'],
        msg: null,
        who: 'Bob'
        });
      const v436 = v285.ranBlocksInit;
      const v442 = {
        blockers: v394,
        catIndex: v372,
        ranBlocksInit: v436
        };
      const v443 = stdlib.protect(ctc0, await interact.getHex(v442), {
        at: './index.rsh:63:37:application',
        fs: ['at ./index.rsh:161:46:application call to "getValidBlockMove" (defined at: ./index.rsh:62:1:function exp)', 'at ./index.rsh:160:16:application call to [unknown function] (defined at: ./index.rsh:160:20:function exp)'],
        msg: 'getHex',
        who: 'Bob'
        });
      const v444 = stdlib.lt(v443, stdlib.checkedBigNumberify('./index.rsh:64:23:decimal', stdlib.UInt_max, 121));
      stdlib.assert(v444, {
        at: './index.rsh:64:9:application',
        fs: ['at ./index.rsh:161:46:application call to "getValidBlockMove" (defined at: ./index.rsh:62:1:function exp)', 'at ./index.rsh:160:16:application call to [unknown function] (defined at: ./index.rsh:160:20:function exp)'],
        msg: null,
        who: 'Bob'
        });
      
      
      const txn4 = await (ctc.sendrecv(7, 1, stdlib.checkedBigNumberify('./index.rsh:162:11:dot', stdlib.UInt_max, 4), [ctc3, ctc0, ctc3, ctc0, ctc0, ctc5, ctc4, ctc0], [v271, v272, v279, v372, v375, v394, v436, v443], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc0], true, true, false, (async (txn4) => {
        const sim_r = { txns: [] };
        sim_r.prevSt = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:162:11:dot', stdlib.UInt_max, 6), v271, v272, v279, v372, v375, v394, v436]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:162:11:dot', stdlib.UInt_max, 6), v271, v272, v279, v372, v394, v436]);
        const [v447] = txn4.data;
        const v450 = txn4.time;
        const v446 = txn4.from;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v449 = stdlib.addressEq(v279, v446);
        stdlib.assert(v449, {
          at: './index.rsh:162:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v452 = stdlib.lt(v447, stdlib.checkedBigNumberify('./index.rsh:88:15:decimal', stdlib.UInt_max, 121));
        stdlib.assert(v452, {
          at: './index.rsh:88:10:application',
          fs: ['at ./index.rsh:164:33:application call to "applyBlockerMove" (defined at: ./index.rsh:86:1:function exp)'],
          msg: null,
          who: 'Bob'
          });
        const v454 = stdlib.Array_set(v394, v447, true);
        const v456 = {
          blockers: v454,
          catIndex: v372,
          ranBlocksInit: v436
          };
        const cv285 = v456;
        const cv581 = v450;
        
        (() => {
          const v285 = cv285;
          const v581 = cv581;
          
          if ((() => {
            let v292;
            const v293 = v285.catIndex;
            const v294 = stdlib.lt(v293, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
            const v295 = stdlib.ge(v293, stdlib.checkedBigNumberify('./index.rsh:28:28:application', stdlib.UInt_max, 110));
            const v296 = v294 ? true : v295;
            if (v296) {
              v292 = true;
              }
            else {
              const v298 = stdlib.mod(v293, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
              const v299 = stdlib.eq(v298, stdlib.checkedBigNumberify('./index.rsh:32:23:decimal', stdlib.UInt_max, 0));
              const v301 = stdlib.eq(v298, stdlib.checkedBigNumberify('./index.rsh:32:45:application', stdlib.UInt_max, 10));
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
                const v313 = stdlib.eq(v312, stdlib.checkedBigNumberify('./index.rsh:32:23:decimal', stdlib.UInt_max, 0));
                const v315 = stdlib.eq(v312, stdlib.checkedBigNumberify('./index.rsh:32:45:application', stdlib.UInt_max, 10));
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
                at: './index.rsh:44:10:application',
                fs: ['at ./index.rsh:100:38:application call to "catBlocked" (defined at: ./index.rsh:43:25:function exp)', 'at ./index.rsh:150:24:application call to "gameOver" (defined at: ./index.rsh:99:1:function exp)'],
                msg: null,
                who: 'Bob'
                });
              const v322 = v285.blockers;
              const v324 = stdlib.sub(v293, stdlib.checkedBigNumberify('./index.rsh:47:36:decimal', stdlib.UInt_max, 1));
              const v326 = v322[v324];
              const v329 = stdlib.add(v293, stdlib.checkedBigNumberify('./index.rsh:47:68:decimal', stdlib.UInt_max, 1));
              const v331 = v322[v329];
              const v332 = v326 ? v331 : false;
              const v335 = stdlib.sub(v293, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
              const v337 = v322[v335];
              const v338 = v332 ? v337 : false;
              const v341 = stdlib.add(v293, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
              const v343 = v322[v341];
              const v344 = v338 ? v343 : false;
              const v348 = stdlib.add(v335, stdlib.checkedBigNumberify('./index.rsh:49:36:decimal', stdlib.UInt_max, 1));
              const v350 = v322[v348];
              const v351 = v344 ? v350 : false;
              const v355 = stdlib.add(v341, stdlib.checkedBigNumberify('./index.rsh:49:75:decimal', stdlib.UInt_max, 1));
              const v357 = v322[v355];
              const v358 = v351 ? v357 : false;
              v360 = v358;
              }
            const v363 = v360 ? false : true;
            
            return v363;})()) {
            sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:151:19:after expr stmt semicolon', stdlib.UInt_max, 4), v271, v272, v279, v285, v581]);
            sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:151:19:after expr stmt semicolon', stdlib.UInt_max, 4), v271, v272, v279, v285]);
            sim_r.view = [ctc2, [stdlib.checkedBigNumberify('./index.rsh:151:19:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            }
          else {
            let v457;
            const v458 = v285.catIndex;
            const v459 = stdlib.lt(v458, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
            const v460 = stdlib.ge(v458, stdlib.checkedBigNumberify('./index.rsh:28:28:application', stdlib.UInt_max, 110));
            const v461 = v459 ? true : v460;
            if (v461) {
              v457 = true;
              }
            else {
              const v463 = stdlib.mod(v458, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
              const v464 = stdlib.eq(v463, stdlib.checkedBigNumberify('./index.rsh:32:23:decimal', stdlib.UInt_max, 0));
              const v466 = stdlib.eq(v463, stdlib.checkedBigNumberify('./index.rsh:32:45:application', stdlib.UInt_max, 10));
              const v467 = v464 ? true : v466;
              if (v467) {
                v457 = true;
                }
              else {
                v457 = false;
                }
              }
            let v525;
            if (v457) {
              v525 = true;
              }
            else {
              let v471;
              if (v461) {
                v471 = true;
                }
              else {
                const v477 = stdlib.mod(v458, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
                const v478 = stdlib.eq(v477, stdlib.checkedBigNumberify('./index.rsh:32:23:decimal', stdlib.UInt_max, 0));
                const v480 = stdlib.eq(v477, stdlib.checkedBigNumberify('./index.rsh:32:45:application', stdlib.UInt_max, 10));
                const v481 = v478 ? true : v480;
                if (v481) {
                  v471 = true;
                  }
                else {
                  v471 = false;
                  }
                }
              const v485 = v471 ? false : true;
              stdlib.assert(v485, {
                at: './index.rsh:44:10:application',
                fs: ['at ./index.rsh:168:47:application call to "catBlocked" (defined at: ./index.rsh:43:25:function exp)'],
                msg: null,
                who: 'Bob'
                });
              const v487 = v285.blockers;
              const v489 = stdlib.sub(v458, stdlib.checkedBigNumberify('./index.rsh:47:36:decimal', stdlib.UInt_max, 1));
              const v491 = v487[v489];
              const v494 = stdlib.add(v458, stdlib.checkedBigNumberify('./index.rsh:47:68:decimal', stdlib.UInt_max, 1));
              const v496 = v487[v494];
              const v497 = v491 ? v496 : false;
              const v500 = stdlib.sub(v458, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
              const v502 = v487[v500];
              const v503 = v497 ? v502 : false;
              const v506 = stdlib.add(v458, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
              const v508 = v487[v506];
              const v509 = v503 ? v508 : false;
              const v513 = stdlib.add(v500, stdlib.checkedBigNumberify('./index.rsh:49:36:decimal', stdlib.UInt_max, 1));
              const v515 = v487[v513];
              const v516 = v509 ? v515 : false;
              const v520 = stdlib.add(v506, stdlib.checkedBigNumberify('./index.rsh:49:75:decimal', stdlib.UInt_max, 1));
              const v522 = v487[v520];
              const v523 = v516 ? v522 : false;
              v525 = v523;
              }
            let v526;
            if (v461) {
              v526 = true;
              }
            else {
              const v532 = stdlib.mod(v458, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
              const v533 = stdlib.eq(v532, stdlib.checkedBigNumberify('./index.rsh:32:23:decimal', stdlib.UInt_max, 0));
              const v535 = stdlib.eq(v532, stdlib.checkedBigNumberify('./index.rsh:32:45:application', stdlib.UInt_max, 10));
              const v536 = v533 ? true : v535;
              if (v536) {
                v526 = true;
                }
              else {
                v526 = false;
                }
              }
            const v539 = [stdlib.checkedBigNumberify('./index.rsh:169:50:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:169:53:decimal', stdlib.UInt_max, 0)];
            const v540 = [stdlib.checkedBigNumberify('./index.rsh:169:59:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:169:62:decimal', stdlib.UInt_max, 2)];
            const v541 = v526 ? v539 : v540;
            const v542 = v541[stdlib.checkedBigNumberify('./index.rsh:169:15:array', stdlib.UInt_max, 0)];
            const v543 = v541[stdlib.checkedBigNumberify('./index.rsh:169:15:array', stdlib.UInt_max, 1)];
            const v544 = stdlib.mul(v542, v272);
            sim_r.txns.push({
              amt: v544,
              kind: 'from',
              to: v271,
              tok: undefined
              });
            const v549 = stdlib.mul(v543, v272);
            sim_r.txns.push({
              amt: v549,
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
            sim_r.view = [ctc2, [stdlib.checkedBigNumberify('./index.rsh:172:17:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = true;
            }})();
        return sim_r;
        })));
      const [v447] = txn4.data;
      const v450 = txn4.time;
      const v446 = txn4.from;
      ;
      const v449 = stdlib.addressEq(v279, v446);
      stdlib.assert(v449, {
        at: './index.rsh:162:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const v452 = stdlib.lt(v447, stdlib.checkedBigNumberify('./index.rsh:88:15:decimal', stdlib.UInt_max, 121));
      stdlib.assert(v452, {
        at: './index.rsh:88:10:application',
        fs: ['at ./index.rsh:164:33:application call to "applyBlockerMove" (defined at: ./index.rsh:86:1:function exp)'],
        msg: null,
        who: 'Bob'
        });
      const v454 = stdlib.Array_set(v394, v447, true);
      const v456 = {
        blockers: v454,
        catIndex: v372,
        ranBlocksInit: v436
        };
      const cv285 = v456;
      const cv581 = v450;
      
      v285 = cv285;
      v581 = cv581;
      
      continue;
      
      }
    let v457;
    const v458 = v285.catIndex;
    const v459 = stdlib.lt(v458, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
    const v460 = stdlib.ge(v458, stdlib.checkedBigNumberify('./index.rsh:28:28:application', stdlib.UInt_max, 110));
    const v461 = v459 ? true : v460;
    if (v461) {
      v457 = true;
      }
    else {
      const v463 = stdlib.mod(v458, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
      const v464 = stdlib.eq(v463, stdlib.checkedBigNumberify('./index.rsh:32:23:decimal', stdlib.UInt_max, 0));
      const v466 = stdlib.eq(v463, stdlib.checkedBigNumberify('./index.rsh:32:45:application', stdlib.UInt_max, 10));
      const v467 = v464 ? true : v466;
      if (v467) {
        v457 = true;
        }
      else {
        v457 = false;
        }
      }
    let v525;
    if (v457) {
      v525 = true;
      }
    else {
      let v471;
      if (v461) {
        v471 = true;
        }
      else {
        const v477 = stdlib.mod(v458, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
        const v478 = stdlib.eq(v477, stdlib.checkedBigNumberify('./index.rsh:32:23:decimal', stdlib.UInt_max, 0));
        const v480 = stdlib.eq(v477, stdlib.checkedBigNumberify('./index.rsh:32:45:application', stdlib.UInt_max, 10));
        const v481 = v478 ? true : v480;
        if (v481) {
          v471 = true;
          }
        else {
          v471 = false;
          }
        }
      const v485 = v471 ? false : true;
      stdlib.assert(v485, {
        at: './index.rsh:44:10:application',
        fs: ['at ./index.rsh:168:47:application call to "catBlocked" (defined at: ./index.rsh:43:25:function exp)'],
        msg: null,
        who: 'Bob'
        });
      const v487 = v285.blockers;
      const v489 = stdlib.sub(v458, stdlib.checkedBigNumberify('./index.rsh:47:36:decimal', stdlib.UInt_max, 1));
      const v491 = v487[v489];
      const v494 = stdlib.add(v458, stdlib.checkedBigNumberify('./index.rsh:47:68:decimal', stdlib.UInt_max, 1));
      const v496 = v487[v494];
      const v497 = v491 ? v496 : false;
      const v500 = stdlib.sub(v458, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
      const v502 = v487[v500];
      const v503 = v497 ? v502 : false;
      const v506 = stdlib.add(v458, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
      const v508 = v487[v506];
      const v509 = v503 ? v508 : false;
      const v513 = stdlib.add(v500, stdlib.checkedBigNumberify('./index.rsh:49:36:decimal', stdlib.UInt_max, 1));
      const v515 = v487[v513];
      const v516 = v509 ? v515 : false;
      const v520 = stdlib.add(v506, stdlib.checkedBigNumberify('./index.rsh:49:75:decimal', stdlib.UInt_max, 1));
      const v522 = v487[v520];
      const v523 = v516 ? v522 : false;
      v525 = v523;
      }
    let v526;
    if (v461) {
      v526 = true;
      }
    else {
      const v532 = stdlib.mod(v458, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
      const v533 = stdlib.eq(v532, stdlib.checkedBigNumberify('./index.rsh:32:23:decimal', stdlib.UInt_max, 0));
      const v535 = stdlib.eq(v532, stdlib.checkedBigNumberify('./index.rsh:32:45:application', stdlib.UInt_max, 10));
      const v536 = v533 ? true : v535;
      if (v536) {
        v526 = true;
        }
      else {
        v526 = false;
        }
      }
    const v539 = [stdlib.checkedBigNumberify('./index.rsh:169:50:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:169:53:decimal', stdlib.UInt_max, 0)];
    const v540 = [stdlib.checkedBigNumberify('./index.rsh:169:59:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:169:62:decimal', stdlib.UInt_max, 2)];
    const v541 = v526 ? v539 : v540;
    const v542 = v541[stdlib.checkedBigNumberify('./index.rsh:169:15:array', stdlib.UInt_max, 0)];
    const v543 = v541[stdlib.checkedBigNumberify('./index.rsh:169:15:array', stdlib.UInt_max, 1)];
    const v544 = stdlib.mul(v542, v272);
    ;
    const v549 = stdlib.mul(v543, v272);
    ;
    stdlib.protect(ctc1, await interact.doneState(v285), {
      at: './index.rsh:175:27:application',
      fs: ['at ./index.rsh:174:11:application call to [unknown function] (defined at: ./index.rsh:174:23:function exp)'],
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
    size: 299
    }, {
    count: 13,
    size: 299
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
// "./index.rsh:136:9:dot"
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
// "./index.rsh:143:9:dot"
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
int 0
itob // bool
substring 7 8
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
// "./index.rsh:44:10:application"
// "[at ./index.rsh:100:38:application call to \"catBlocked\" (defined at: ./index.rsh:43:25:function exp),at ./index.rsh:150:24:application call to \"gameOver\" (defined at: ./index.rsh:99:1:function exp)]"
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
+
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
// "./index.rsh:44:10:application"
// "[at ./index.rsh:168:47:application call to \"catBlocked\" (defined at: ./index.rsh:43:25:function exp)]"
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
+
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
// "[at ./index.rsh:144:41:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
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
// "[at ./index.rsh:144:41:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
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
// "./index.rsh:155:12:dot"
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
// "./index.rsh:155:12:dot"
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
// "./index.rsh:44:10:application"
// "[at ./index.rsh:77:22:application call to \"catBlocked\" (defined at: ./index.rsh:43:25:function exp),at ./index.rsh:157:37:application call to \"applyCatMove\" (defined at: ./index.rsh:76:1:function exp)]"
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
// "./index.rsh:77:10:application"
// "[at ./index.rsh:157:37:application call to \"applyCatMove\" (defined at: ./index.rsh:76:1:function exp)]"
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
+
getbyte
&&
!
assert
load 252
substring 129 130
btoi
store 244
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
load 244
itob // bool
substring 7 8
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
gtxna 0 ApplicationArgs 12
btoi
store 249
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
int 13
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
load 250
itob // bool
substring 7 8
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
// "./index.rsh:162:11:dot"
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
// "./index.rsh:162:11:dot"
// "[]"
load 253
gtxn 0 Sender
==
assert
// Nothing
// "./index.rsh:88:10:application"
// "[at ./index.rsh:164:33:application call to \"applyBlockerMove\" (defined at: ./index.rsh:86:1:function exp)]"
load 249
int 121
<
assert
load 251
load 249
int 1
setbyte
load 252
itob
concat
load 250
itob // bool
substring 7 8
concat
dup
store 248
substring 121 129
btoi
dup
store 246
int 11
<
load 246
int 110
>=
||
dup
store 245
bz l0
int 1
store 247
b l1
l0:
load 246
int 11
%
dup
store 244
int 0
==
load 244
int 10
==
||
bz l2
int 1
store 247
b l3
l2:
int 0
store 247
l3:
l1:
load 247
bz l4
int 1
store 244
b l5
l4:
load 245
bz l6
int 1
store 243
b l7
l6:
load 246
int 11
%
dup
store 242
int 0
==
load 242
int 10
==
||
bz l8
int 1
store 243
b l9
l8:
int 0
store 243
l9:
l7:
// Nothing
// "./index.rsh:44:10:application"
// "[at ./index.rsh:100:38:application call to \"catBlocked\" (defined at: ./index.rsh:43:25:function exp),at ./index.rsh:150:24:application call to \"gameOver\" (defined at: ./index.rsh:99:1:function exp)]"
load 243
!
assert
load 248
substring 0 121
store 242
load 246
int 11
-
store 241
load 246
int 11
+
store 240
load 242
load 246
int 1
-
getbyte
load 242
load 246
int 1
+
getbyte
&&
load 242
load 241
getbyte
&&
load 242
load 240
getbyte
&&
load 242
load 241
int 1
+
getbyte
&&
load 242
load 240
int 1
+
getbyte
&&
store 244
l5:
load 244
bz l10
load 245
bz l11
int 1
store 243
b l12
l11:
load 246
int 11
%
dup
store 242
int 0
==
load 242
int 10
==
||
bz l13
int 1
store 243
b l14
l13:
int 0
store 243
l14:
l12:
load 243
bz l15
int 1
store 242
b l16
l15:
load 245
bz l17
int 1
store 241
b l18
l17:
load 246
int 11
%
dup
store 240
int 0
==
load 240
int 10
==
||
bz l19
int 1
store 241
b l20
l19:
int 0
store 241
l20:
l18:
// Nothing
// "./index.rsh:44:10:application"
// "[at ./index.rsh:168:47:application call to \"catBlocked\" (defined at: ./index.rsh:43:25:function exp)]"
load 241
!
assert
load 248
substring 0 121
store 240
load 246
int 11
-
store 239
load 246
int 11
+
store 238
load 240
load 246
int 1
-
getbyte
load 240
load 246
int 1
+
getbyte
&&
load 240
load 239
getbyte
&&
load 240
load 238
getbyte
&&
load 240
load 239
int 1
+
getbyte
&&
load 240
load 238
int 1
+
getbyte
&&
store 242
l16:
load 245
bz l21
int 1
store 241
b l22
l21:
load 246
int 11
%
dup
store 240
int 0
==
load 240
int 10
==
||
bz l23
int 1
store 241
b l24
l23:
int 0
store 241
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
load 241
select
store 240
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 255
==
assert
gtxn 4 Amount
load 240
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
load 240
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
load 248
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
                  },
                  {
                    "internalType": "bool",
                    "name": "ranBlocksInit",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T6",
                "name": "v285",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v581",
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
              },
              {
                "internalType": "bool",
                "name": "v436",
                "type": "bool"
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
                "name": "v447",
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
                  },
                  {
                    "internalType": "bool",
                    "name": "ranBlocksInit",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T6",
                "name": "v285",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v581",
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
              },
              {
                "internalType": "bool",
                "name": "v436",
                "type": "bool"
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
                "name": "v447",
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
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a16040805160208082018352438252825180820184526000808252925181528351808301849052905181850152835180820385018152606090910190935282519201919091209055611d6d806100826000396000f3fe60806040526004361061004e5760003560e01c80632438df701461005a5780639128133c1461006f5780639532ef0114610082578063cd62769a14610095578063e163d7c4146100a857610055565b3661005557005b600080fd5b61006d61006836600461198b565b6100bb565b005b61006d61007d36600461199c565b610617565b61006d6100903660046119b8565b6107a8565b61006d6100a336600461199c565b6108be565b61006d6100b636600461198b565b610ce8565b6040516100cf906001908390602001611c84565b6040516020818303038152906040528051906020012060001c600054146100f557600080fd5b600080556101016116a5565b610110600a6040840135611c98565b431061011b57600080fd5b3460208301351461012b57600080fd5b8051600090819052815160209081018290528251604090810183905283516060018390528351608001839052835160a001839052835160c001839052835160e00183905283516101000183905283516101200183905283516101400183905283516101600183905283516101800183905283516101a00183905283516101c00183905283516101e00183905283516102000183905283516102200183905283516102400183905283516102600183905283516102800183905283516102a00183905283516102c00183905283516102e00183905283516103000183905283516103200183905283516103400183905283516103600183905283516103800183905283516103a00183905283516103c00183905283516103e00183905283516104000183905283516104200183905283516104400183905283516104600183905283516104800183905283516104a00183905283516104c00183905283516104e00183905283516105000183905283516105200183905283516105400183905283516105600183905283516105800183905283516105a00183905283516105c00183905283516105e00183905283516106000183905283516106200183905283516106400183905283516106600183905283516106800183905283516106a00183905283516106c00183905283516106e00183905283516107000183905283516107200183905283516107400183905283516107600183905283516107800183905283516107a00183905283516107c00183905283516107e00183905283516108000183905283516108200183905283516108400183905283516108600183905283516108800183905283516108a00183905283516108c00183905283516108e00183905283516109000183905283516109200183905283516109400183905283516109600183905283516109800183905283516109a00183905283516109c00183905283516109e0018390528351610a00018390528351610a20018390528351610a40018390528351610a60018390528351610a80018390528351610aa0018390528351610ac0018390528351610ae0018390528351610b00018390528351610b20018390528351610b40018390528351610b60018390528351610b80018390528351610ba0018390528351610bc0018390528351610be0018390528351610c00018390528351610c20018390528351610c40018390528351610c60018390528351610c80018390528351610ca0018390528351610cc0018390528351610ce0018390528351610d00018390528351610d20018390528351610d40018390528351610d60018390528351610d80018390528351610da0018390528351610dc0018390528351610de0018390528351610e00018390528351610e20018390528351610e40018390528351610e60018390528351610e80018390528351610ea0018390528351610ec0018390528351610ee0018390528351610f000183905283518285018051919091528051603c9301929092529051810191909152517f1ca594b20641191c893d80895212a20239e99e17b7304a35c096140ec34f22dd906105b3908490611b28565b60405180910390a16105c36116ca565b6105d06020840184611950565b81516001600160a01b03909116905280516020808501359181019190915281513360409091015282810151818301805191909152514391015261061281610df4565b505050565b60405161062b906006908390602001611c01565b6040516020818303038152906040528051906020012060001c6000541461065157600080fd5b6000805561065d6116fa565b341561066857600080fd5b336106796060840160408501611950565b6001600160a01b03161461068c57600080fd5b6079610fe08301351061069e57600080fd5b60408051610f208181019092526106d79160a085019060799083908390808284376000920191909152505050610fe084013560016111ba565b815152805160608301356020909101526106f9610fe08301610fc08401611971565b8151901515604091820152517fd132a811fba8e385faeae670f5f79818f3d6ac0de721472912d49c738d560f4990610732908490611b6d565b60405180910390a16107426116ca565b61074f6020840184611950565b81516001600160a01b03909116905280516020808501359101526107796060840160408501611950565b81516001600160a01b039091166040909101528151602080830180519290925290514391015261061281610df4565b60408051600060208201528235918101919091526060016040516020818303038152906040528051906020012060001c600054146107e557600080fd5b60008055346020820135146107f957600080fd5b6040805182358152602080840135908201527ff2c62eba998811305a23599b2e6d212befbd7ded3a73f4c08bfb9aefe08dc166910160405180910390a1610863604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b338152602091820135828201908152436040808401918252805160018187015293516001600160a01b03168482015291516060840152516080808401919091528151808403909101815260a090920190528051910120600055565b6040516108d2906004908390602001611b7c565b6040516020818303038152906040528051906020012060001c600054146108f857600080fd5b600080805560408051608081018252828152602081018390529081018290526060810191909152341561092a57600080fd5b336109386020840184611950565b6001600160a01b03161461094b57600080fd5b600b610f808301351061096757606e610f80830135101561096a565b60015b1561097857600181526109b7565b610988600b610f80840135611d01565b60208201819052156109a157600a8160200151146109a4565b60015b156109b257600181526109b7565b600081525b80516109c45760016109c7565b60005b6109d057600080fd5b6109e0600b610f80840135611ccf565b60408201526109f5600b610f80840135611c98565b6060808301919091528201610a106001610f80850135611ccf565b60798110610a2e57634e487b7160e01b600052603260045260246000fd5b602002016020810190610a419190611971565b610a4c576000610a91565b60608201610a606001610f80850135611c98565b60798110610a7e57634e487b7160e01b600052603260045260246000fd5b602002016020810190610a919190611971565b610a9c576000610ad7565b6040810151606083019060798110610ac457634e487b7160e01b600052603260045260246000fd5b602002016020810190610ad79190611971565b610ae2576000610b1d565b6060818101519083019060798110610b0a57634e487b7160e01b600052603260045260246000fd5b602002016020810190610b1d9190611971565b610b28576000610b6f565b60408101516060830190610b3e90600190611c98565b60798110610b5c57634e487b7160e01b600052603260045260246000fd5b602002016020810190610b6f9190611971565b610b7a576000610bc1565b60608181015190830190610b9090600190611c98565b60798110610bae57634e487b7160e01b600052603260045260246000fd5b602002016020810190610bc19190611971565b610bcc576001610bcf565b60005b610bd857600080fd5b7f15a803506ed4c8766c2965c7a41543c983172cc1aca63e02d91b20474dc89c2682604051610c079190611b4f565b60405180910390a1610c1761170d565b610c246020840184611950565b6001600160a01b0316815260208084013590820152610c496060840160408501611950565b6001600160a01b0316604080830191909152610fe08401356060808401919091524360808401528151610f2081810190935291908501906079908390839080828437600092019190915250505060a0820152610cad610fc08401610fa08501611971565b151560c0820152604051610cc8906006908390602001611c16565b60408051601f198184030181529190528051602090910120600055505050565b604051610cfc906001908390602001611c84565b6040516020818303038152906040528051906020012060001c60005414610d2257600080fd5b60008055610d35600a6040830135611c98565b431015610d4157600080fd5b3415610d4c57600080fd5b33610d5a6020830183611950565b6001600160a01b031614610d6d57600080fd5b610d7a6020820182611950565b6040516001600160a01b039190911690602083013580156108fc02916000818181858888f19350505050158015610db5573d6000803e3d6000fd5b507fc3d6ba703f6ce931b1dd0e05e983d8be7c8ccc7f15219d844425151d8562301381604051610de59190611b28565b60405180910390a16000805533ff5b604080516101008101825260008082526020808301829052928201819052606082018190526080820181905260a0820181905260c0820181905260e0820152828201515190910151600b11610e5557602080830151510151606e1115610e58565b60015b1580156020830152610e6d5760018152610eb1565b602080830151510151610e8290600b90611d01565b6040820181905215610e9b57600a816040015114610e9e565b60015b15610eac5760018152610eb1565b600081525b805115610ec457600160e0820152611102565b806020015115610eda5760016060820152610f24565b602080830151510151610eef90600b90611d01565b6080820181905215610f0857600a816080015114610f0b565b60015b15610f1c5760016060820152610f24565b600060608201525b8060600151610f34576001610f37565b60005b610f4057600080fd5b602080830151510151610f5590600b90611ccf565b60a0820152602080830151510151610f6f90600b90611c98565b60c0820152602080830151518051910151610f8c90600190611ccf565b60798110610faa57634e487b7160e01b600052603260045260246000fd5b6020020151610fba576000610ff6565b602080830151518051910151610fd290600190611c98565b60798110610ff057634e487b7160e01b600052603260045260246000fd5b60200201515b611001576000611031565b6020820151515160a08201516079811061102b57634e487b7160e01b600052603260045260246000fd5b60200201515b61103c57600061106c565b6020820151515160c08201516079811061106657634e487b7160e01b600052603260045260246000fd5b60200201515b6110775760006110b3565b6020820151515160a082015161108f90600190611c98565b607981106110ad57634e487b7160e01b600052603260045260246000fd5b60200201515b6110be5760006110fa565b6020820151515160c08201516110d690600190611c98565b607981106110f457634e487b7160e01b600052603260045260246000fd5b60200201515b151560e08201525b8060e001511561115e57611114611762565b82515181516001600160a01b039182169052835160209081015183518201528451604090810151845193169201919091528301515181516060015261115881611262565b506111b6565b611166611775565b8251516001600160a01b03908116825283516020908101518184015284516040908101519092168284015280850180515160608501525181015160808401529051610cc891600491849101611b91565b5050565b6111c26117bc565b60005b607981101561122f578481607981106111ee57634e487b7160e01b600052603260045260246000fd5b602002015182826079811061121357634e487b7160e01b600052603260045260246000fd5b911515602090920201528061122781611ce6565b9150506111c5565b508181846079811061125157634e487b7160e01b600052603260045260246000fd5b911515602090920201529392505050565b61126a6117db565b81516060015160200151600b1161128e5781516060015160200151606e1115611291565b60015b15801560208301526112a657600181526112eb565b815160600151602001516112bc90600b90611d01565b60408201819052156112d557600a8160400151146112d8565b60015b156112e657600181526112eb565b600081525b8051156112fe57600160e0820152611543565b806020015115611314576001606082015261135f565b8151606001516020015161132a90600b90611d01565b608082018190521561134357600a816080015114611346565b60015b15611357576001606082015261135f565b600060608201525b806060015161136f576001611372565b60005b61137b57600080fd5b8151606001516020015161139190600b90611ccf565b60a0820152815160600151602001516113ac90600b90611c98565b60c082015281516060015180516020909101516113cb90600190611ccf565b607981106113e957634e487b7160e01b600052603260045260246000fd5b60200201516113f9576000611437565b815160600151805160209091015161141390600190611c98565b6079811061143157634e487b7160e01b600052603260045260246000fd5b60200201515b611442576000611472565b8151606001515160a08201516079811061146c57634e487b7160e01b600052603260045260246000fd5b60200201515b61147d5760006114ad565b8151606001515160c0820151607981106114a757634e487b7160e01b600052603260045260246000fd5b60200201515b6114b85760006114f4565b8151606001515160a08201516114d090600190611c98565b607981106114ee57634e487b7160e01b600052603260045260246000fd5b60200201515b6114ff57600061153b565b8151606001515160c082015161151790600190611c98565b6079811061153557634e487b7160e01b600052603260045260246000fd5b60200201515b151560e08201525b80602001511561155a5760016101008201526115a9565b8151606001516020015161157090600b90611d01565b61012082018190521561158b57600a8161012001511461158e565b60015b156115a05760016101008201526115a9565b60006101008201525b6101408101805160029081905290516000602091820181905261016084018051919091525101526101008101516115e5578061016001516115ec565b8061014001515b61018082018190528251805160209091015191516001600160a01b03909116916108fc9161161a9190611cb0565b6040518115909202916000818181858888f19350505050158015611642573d6000803e3d6000fd5b508160000151604001516001600160a01b03166108fc836000015160200151836101800151602001516116759190611cb0565b6040518115909202916000818181858888f1935050505015801561169d573d6000803e3d6000fd5b506000805533ff5b60405180604001604052806116b86117bc565b81526020016116c5611898565b905290565b6040805160a0810182526000918101828152606082018390526080820192909252908152602081016116c56118bf565b60405180602001604052806116c5611898565b6040518060e0016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016117556117bc565b8152600060209091015290565b60405180604001604052806117556118d2565b6040518060a0016040528060006001600160a01b031681526020016000815260200160006001600160a01b031681526020016117af611898565b8152602001600081525090565b60405180610f2001604052806079906020820280368337509192915050565b604051806101a001604052806000151581526020016000151581526020016000815260200160001515815260200160008152602001600081526020016000815260200160001515815260200160001515815260200160008152602001611854604051806040016040528060008152602001600081525090565b8152602001611876604051806040016040528060008152602001600081525090565b81526020016116c5604051806040016040528060008152602001600081525090565b60405180606001604052806118ab6117bc565b815260006020820181905260409091015290565b60405180604001604052806117af611898565b604051806080016040528060006001600160a01b031681526020016000815260200160006001600160a01b031681526020016116c5611898565b80356001600160a01b038116811461192357600080fd5b919050565b8035801515811461192357600080fd5b6000611000828403121561194a578081fd5b50919050565b600060208284031215611961578081fd5b61196a8261190c565b9392505050565b600060208284031215611982578081fd5b61196a82611928565b60006080828403121561194a578081fd5b600061100082840312156119ae578081fd5b61196a8383611938565b60006040828403121561194a578081fd5b8060005b60798110156119f6576119df82611928565b1515845260209384019391909101906001016119cd565b50505050565b8060005b60798110156119f65781511515845260209384019390910190600101611a00565b6001600160a01b0380611a338361190c565b1683526020820135602084015280611a4d6040840161190c565b16604084015250611a6460608301606083016119c9565b610f808181013590830152610fa0611a7d818301611928565b151590830152610fc090810135910152565b6001600160a01b0380611aa18361190c565b1683526020820135602084015280611abb6040840161190c565b166040840152506060810135606083015260808101356080830152611ae660a0830160a083016119c9565b610fc0611af4818301611928565b151581840152505050565b6001600160a01b03611b108261190c565b16825260208181013590830152604090810135910152565b60808101611b368284611aff565b611b4260608401611928565b1515606083015292915050565b6110008101611b5e8284611a21565b610fe092830135919092015290565b6110008101611b5e8284611a8f565b828152611000810161196a6020830184611a21565b60006110008201905083825260018060a01b0380845116602084015260208401516040840152806040850151166060840152506060830151611bd76080840182516119fc565b6020810151610fa0840152604001511515610fc083015260809290920151610fe090910152919050565b828152611000810161196a6020830184611a8f565b60006110008201905083825260018060a01b03808451166020840152602084015160408401528060408501511660608401525060608301516080830152608083015160a083015260a0830151611c6f60c08401826119fc565b5060c08301511515610fe08301529392505050565b8281526080810161196a6020830184611aff565b60008219821115611cab57611cab611d21565b500190565b6000816000190483118215151615611cca57611cca611d21565b500290565b600082821015611ce157611ce1611d21565b500390565b6000600019821415611cfa57611cfa611d21565b5060010190565b600082611d1c57634e487b7160e01b81526012600452602481fd5b500690565b634e487b7160e01b600052601160045260246000fdfea26469706673582212206a6109ece6f10958a47168fd2c3c0e1c8a4fd03b6827b33442b8dd0a0f1f7bbc64736f6c63430008020033`,
  deployMode: `DM_constructor`,
  views: {
    }
  };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };


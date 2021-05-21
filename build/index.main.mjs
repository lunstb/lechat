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
  const ctc1 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Tuple([ctc0]);
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc0, ctc2, ctc0, ctc0]);
  const ctc8 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc0, ctc2, ctc0]);
  const ctc9 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc0, ctc2]);
  const ctc10 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc0, ctc0]);
  const ctc11 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc0]);
  const ctc12 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc0]);
  const ctc13 = stdlib.T_Tuple([ctc0, ctc6, ctc0]);
  
  
  const v267 = await ctc.creationTime();
  const v266 = stdlib.protect(ctc0, interact.wager, null);
  
  
  
  const txn1 = await (ctc.sendrecv(1, 1, stdlib.checkedBigNumberify('./index.rsh:43:9:dot', stdlib.UInt_max, 0), [ctc0, ctc0], [v267, v266], [v266, []], [ctc0], true, true, false, (async (txn1) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc1, [stdlib.checkedBigNumberify('./index.rsh:43:9:dot', stdlib.UInt_max, 0), v267]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc4, [stdlib.checkedBigNumberify('./index.rsh:43:9:dot', stdlib.UInt_max, 0)]);
    const [v272] = txn1.data;
    const v275 = txn1.time;
    const v271 = txn1.from;
    
    sim_r.txns.push({
      amt: v272,
      kind: 'to',
      tok: undefined
      });
    sim_r.nextSt = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:45:15:after expr stmt semicolon', stdlib.UInt_max, 1), v271, v272, v275]);
    sim_r.nextSt_noTime = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('./index.rsh:45:15:after expr stmt semicolon', stdlib.UInt_max, 1), v271, v272]);
    sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:45:15:after expr stmt semicolon', stdlib.UInt_max, 0)]];
    sim_r.isHalt = false;
    
    return sim_r;
    })));
  const [v272] = txn1.data;
  const v275 = txn1.time;
  const v271 = txn1.from;
  ;
  const txn2 = await (ctc.recv(2, 0, [], false, stdlib.checkedBigNumberify('./index.rsh:30:18:decimal', stdlib.UInt_max, 10)));
  if (txn2.didTimeout) {
    
    const txn3 = await (ctc.sendrecv(3, 0, stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 2), [ctc6, ctc0, ctc0], [v271, v272, v275], [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []], [], true, true, false, (async (txn3) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 1), v271, v272, v275]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 1), v271, v272]);
      const [] = txn3.data;
      const v401 = txn3.time;
      const v398 = txn3.from;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v400 = stdlib.addressEq(v271, v398);
      stdlib.assert(v400, {
        at: 'reach standard library:209:7:dot',
        fs: ['at ./index.rsh:50:41:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
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
      sim_r.nextSt = stdlib.digest(ctc5, []);
      sim_r.nextSt_noTime = stdlib.digest(ctc5, []);
      sim_r.view = [ctc4, [stdlib.checkedBigNumberify('reach standard library:211:11:after expr stmt semicolon', stdlib.UInt_max, 0)]];
      sim_r.isHalt = true;
      
      return sim_r;
      })));
    const [] = txn3.data;
    const v401 = txn3.time;
    const v398 = txn3.from;
    ;
    const v400 = stdlib.addressEq(v271, v398);
    stdlib.assert(v400, {
      at: 'reach standard library:209:7:dot',
      fs: ['at ./index.rsh:50:41:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'sender correct',
      who: 'Alice'
      });
    ;
    stdlib.protect(ctc3, await interact.informTimeout(), {
      at: './index.rsh:39:33:application',
      fs: ['at ./index.rsh:38:13:application call to [unknown function] (defined at: ./index.rsh:38:25:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:37:32:function exp)', 'at ./index.rsh:50:41:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    }
  else {
    const [] = txn2.data;
    const v282 = txn2.time;
    const v279 = txn2.from;
    const v281 = stdlib.add(v272, v272);
    ;
    const v286 = stdlib.protect(ctc0, await interact.getCoin(), {
      at: './index.rsh:55:42:application',
      fs: ['at ./index.rsh:54:15:application call to [unknown function] (defined at: ./index.rsh:54:19:function exp)'],
      msg: 'getCoin',
      who: 'Alice'
      });
    const v288 = stdlib.protect(ctc0, await interact.random(), {
      at: 'reach standard library:60:31:application',
      fs: ['at ./index.rsh:56:52:application call to "makeCommitment" (defined at: reach standard library:59:8:function exp)', 'at ./index.rsh:54:15:application call to [unknown function] (defined at: ./index.rsh:54:19:function exp)'],
      msg: 'random',
      who: 'Alice'
      });
    const v289 = stdlib.digest(ctc1, [v288, v286]);
    
    
    const txn3 = await (ctc.sendrecv(4, 1, stdlib.checkedBigNumberify('./index.rsh:58:11:dot', stdlib.UInt_max, 4), [ctc6, ctc0, ctc6, ctc0, ctc0, ctc2], [v271, v272, v279, v281, v282, v289], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc2], true, true, stdlib.checkedBigNumberify('./index.rsh:30:18:decimal', stdlib.UInt_max, 10), (async (txn3) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:58:11:dot', stdlib.UInt_max, 2), v271, v272, v279, v281, v282]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:58:11:dot', stdlib.UInt_max, 2), v271, v272, v279, v281]);
      const [v292] = txn3.data;
      const v295 = txn3.time;
      const v291 = txn3.from;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v294 = stdlib.addressEq(v271, v291);
      stdlib.assert(v294, {
        at: './index.rsh:58:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      sim_r.nextSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:60:17:after expr stmt semicolon', stdlib.UInt_max, 4), v271, v272, v279, v281, v292, v295]);
      sim_r.nextSt_noTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:60:17:after expr stmt semicolon', stdlib.UInt_max, 4), v271, v272, v279, v281, v292]);
      sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:60:17:after expr stmt semicolon', stdlib.UInt_max, 0)]];
      sim_r.isHalt = false;
      
      return sim_r;
      })));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.recv(5, 0, [], false, false));
      const [] = txn4.data;
      const v382 = txn4.time;
      const v379 = txn4.from;
      ;
      const v381 = stdlib.addressEq(v279, v379);
      stdlib.assert(v381, {
        at: 'reach standard library:209:7:dot',
        fs: ['at ./index.rsh:59:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
        msg: 'sender correct',
        who: 'Alice'
        });
      ;
      stdlib.protect(ctc3, await interact.informTimeout(), {
        at: './index.rsh:39:33:application',
        fs: ['at ./index.rsh:38:13:application call to [unknown function] (defined at: ./index.rsh:38:25:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:37:32:function exp)', 'at ./index.rsh:59:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
        msg: 'informTimeout',
        who: 'Alice'
        });
      
      return;
      }
    else {
      const [v292] = txn3.data;
      const v295 = txn3.time;
      const v291 = txn3.from;
      ;
      const v294 = stdlib.addressEq(v271, v291);
      stdlib.assert(v294, {
        at: './index.rsh:58:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const txn4 = await (ctc.recv(6, 1, [ctc0], false, stdlib.checkedBigNumberify('./index.rsh:30:18:decimal', stdlib.UInt_max, 10)));
      if (txn4.didTimeout) {
        
        const txn5 = await (ctc.sendrecv(7, 0, stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 5), [ctc6, ctc0, ctc6, ctc0, ctc2, ctc0], [v271, v272, v279, v281, v292, v295], [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []], [], true, true, false, (async (txn5) => {
          const sim_r = { txns: [] };
          sim_r.prevSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 4), v271, v272, v279, v281, v292, v295]);
          sim_r.prevSt_noPrevTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 4), v271, v272, v279, v281, v292]);
          const [] = txn5.data;
          const v363 = txn5.time;
          const v360 = txn5.from;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v362 = stdlib.addressEq(v271, v360);
          stdlib.assert(v362, {
            at: 'reach standard library:209:7:dot',
            fs: ['at ./index.rsh:66:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          sim_r.txns.push({
            amt: v281,
            kind: 'from',
            to: v271,
            tok: undefined
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined
            })
          sim_r.nextSt = stdlib.digest(ctc5, []);
          sim_r.nextSt_noTime = stdlib.digest(ctc5, []);
          sim_r.view = [ctc4, [stdlib.checkedBigNumberify('reach standard library:211:11:after expr stmt semicolon', stdlib.UInt_max, 0)]];
          sim_r.isHalt = true;
          
          return sim_r;
          })));
        const [] = txn5.data;
        const v363 = txn5.time;
        const v360 = txn5.from;
        ;
        const v362 = stdlib.addressEq(v271, v360);
        stdlib.assert(v362, {
          at: 'reach standard library:209:7:dot',
          fs: ['at ./index.rsh:66:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc3, await interact.informTimeout(), {
          at: './index.rsh:39:33:application',
          fs: ['at ./index.rsh:38:13:application call to [unknown function] (defined at: ./index.rsh:38:25:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:37:32:function exp)', 'at ./index.rsh:66:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
          msg: 'informTimeout',
          who: 'Alice'
          });
        
        return;
        }
      else {
        const [v301] = txn4.data;
        const v304 = txn4.time;
        const v300 = txn4.from;
        ;
        const v303 = stdlib.addressEq(v279, v300);
        stdlib.assert(v303, {
          at: './index.rsh:65:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        
        
        const txn5 = await (ctc.sendrecv(8, 2, stdlib.checkedBigNumberify('./index.rsh:71:11:dot', stdlib.UInt_max, 6), [ctc6, ctc0, ctc6, ctc0, ctc2, ctc0, ctc0, ctc0, ctc0], [v271, v272, v279, v281, v292, v301, v304, v288, v286], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc0, ctc0], true, true, stdlib.checkedBigNumberify('./index.rsh:30:18:decimal', stdlib.UInt_max, 10), (async (txn5) => {
          const sim_r = { txns: [] };
          sim_r.prevSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:71:11:dot', stdlib.UInt_max, 6), v271, v272, v279, v281, v292, v301, v304]);
          sim_r.prevSt_noPrevTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:71:11:dot', stdlib.UInt_max, 6), v271, v272, v279, v281, v292, v301]);
          const [v309, v310] = txn5.data;
          const v313 = txn5.time;
          const v308 = txn5.from;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v312 = stdlib.addressEq(v271, v308);
          stdlib.assert(v312, {
            at: './index.rsh:71:11:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const v315 = stdlib.digest(ctc1, [v309, v310]);
          const v316 = stdlib.digestEq(v292, v315);
          stdlib.assert(v316, {
            at: 'reach standard library:65:17:application',
            fs: ['at ./index.rsh:73:24:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
            msg: null,
            who: 'Alice'
            });
          const v319 = stdlib.add(v310, v301);
          const v321 = stdlib.gt(v319, stdlib.checkedBigNumberify('./index.rsh:78:20:decimal', stdlib.UInt_max, 100));
          if (v321) {
            const v322 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:79:18:decimal', stdlib.UInt_max, 2), v272);
            sim_r.txns.push({
              amt: v322,
              kind: 'from',
              to: v271,
              tok: undefined
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.nextSt = stdlib.digest(ctc5, []);
            sim_r.nextSt_noTime = stdlib.digest(ctc5, []);
            sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:85:15:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = true;
            }
          else {
            const v327 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:82:18:decimal', stdlib.UInt_max, 2), v272);
            sim_r.txns.push({
              amt: v327,
              kind: 'from',
              to: v279,
              tok: undefined
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.nextSt = stdlib.digest(ctc5, []);
            sim_r.nextSt_noTime = stdlib.digest(ctc5, []);
            sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:85:15:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = true;
            }
          return sim_r;
          })));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.recv(9, 0, [], false, false));
          const [] = txn6.data;
          const v344 = txn6.time;
          const v341 = txn6.from;
          ;
          const v343 = stdlib.addressEq(v279, v341);
          stdlib.assert(v343, {
            at: 'reach standard library:209:7:dot',
            fs: ['at ./index.rsh:72:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          ;
          stdlib.protect(ctc3, await interact.informTimeout(), {
            at: './index.rsh:39:33:application',
            fs: ['at ./index.rsh:38:13:application call to [unknown function] (defined at: ./index.rsh:38:25:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:37:32:function exp)', 'at ./index.rsh:72:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
            msg: 'informTimeout',
            who: 'Alice'
            });
          
          return;
          }
        else {
          const [v309, v310] = txn5.data;
          const v313 = txn5.time;
          const v308 = txn5.from;
          ;
          const v312 = stdlib.addressEq(v271, v308);
          stdlib.assert(v312, {
            at: './index.rsh:71:11:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const v315 = stdlib.digest(ctc1, [v309, v310]);
          const v316 = stdlib.digestEq(v292, v315);
          stdlib.assert(v316, {
            at: 'reach standard library:65:17:application',
            fs: ['at ./index.rsh:73:24:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
            msg: null,
            who: 'Alice'
            });
          const v319 = stdlib.add(v310, v301);
          const v321 = stdlib.gt(v319, stdlib.checkedBigNumberify('./index.rsh:78:20:decimal', stdlib.UInt_max, 100));
          if (v321) {
            const v322 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:79:18:decimal', stdlib.UInt_max, 2), v272);
            ;
            stdlib.protect(ctc3, await interact.seeOutcome(v319), {
              at: './index.rsh:88:28:application',
              fs: ['at ./index.rsh:87:11:application call to [unknown function] (defined at: ./index.rsh:87:23:function exp)'],
              msg: 'seeOutcome',
              who: 'Alice'
              });
            
            return;}
          else {
            const v327 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:82:18:decimal', stdlib.UInt_max, 2), v272);
            ;
            stdlib.protect(ctc3, await interact.seeOutcome(v319), {
              at: './index.rsh:88:28:application',
              fs: ['at ./index.rsh:87:11:application call to [unknown function] (defined at: ./index.rsh:87:23:function exp)'],
              msg: 'seeOutcome',
              who: 'Alice'
              });
            
            return;}}
        }
      }
    }
  
  
  };
export async function Bob(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc4 = stdlib.T_Tuple([ctc0]);
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc0, ctc2, ctc0, ctc0]);
  const ctc8 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc0, ctc2, ctc0]);
  const ctc9 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc0, ctc2]);
  const ctc10 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc0, ctc0]);
  const ctc11 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc0]);
  const ctc12 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc0]);
  const ctc13 = stdlib.T_Tuple([ctc0, ctc6, ctc0]);
  
  
  const v267 = await ctc.creationTime();
  
  const txn1 = await (ctc.recv(1, 1, [ctc0], false, false));
  const [v272] = txn1.data;
  const v275 = txn1.time;
  const v271 = txn1.from;
  ;
  stdlib.protect(ctc1, await interact.acceptWager(v272), {
    at: './index.rsh:48:29:application',
    fs: ['at ./index.rsh:47:13:application call to [unknown function] (defined at: ./index.rsh:47:17:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  
  const txn2 = await (ctc.sendrecv(2, 0, stdlib.checkedBigNumberify('./index.rsh:49:9:dot', stdlib.UInt_max, 2), [ctc6, ctc0, ctc0], [v271, v272, v275], [v272, []], [], true, true, stdlib.checkedBigNumberify('./index.rsh:30:18:decimal', stdlib.UInt_max, 10), (async (txn2) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:49:9:dot', stdlib.UInt_max, 1), v271, v272, v275]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('./index.rsh:49:9:dot', stdlib.UInt_max, 1), v271, v272]);
    const [] = txn2.data;
    const v282 = txn2.time;
    const v279 = txn2.from;
    
    const v281 = stdlib.add(v272, v272);
    sim_r.txns.push({
      amt: v272,
      kind: 'to',
      tok: undefined
      });
    sim_r.nextSt = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:52:17:after expr stmt semicolon', stdlib.UInt_max, 2), v271, v272, v279, v281, v282]);
    sim_r.nextSt_noTime = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:52:17:after expr stmt semicolon', stdlib.UInt_max, 2), v271, v272, v279, v281]);
    sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:52:17:after expr stmt semicolon', stdlib.UInt_max, 0)]];
    sim_r.isHalt = false;
    
    return sim_r;
    })));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.recv(3, 0, [], false, false));
    const [] = txn3.data;
    const v401 = txn3.time;
    const v398 = txn3.from;
    ;
    const v400 = stdlib.addressEq(v271, v398);
    stdlib.assert(v400, {
      at: 'reach standard library:209:7:dot',
      fs: ['at ./index.rsh:50:41:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'sender correct',
      who: 'Bob'
      });
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:39:33:application',
      fs: ['at ./index.rsh:38:13:application call to [unknown function] (defined at: ./index.rsh:38:25:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:37:32:function exp)', 'at ./index.rsh:50:41:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    }
  else {
    const [] = txn2.data;
    const v282 = txn2.time;
    const v279 = txn2.from;
    const v281 = stdlib.add(v272, v272);
    ;
    const txn3 = await (ctc.recv(4, 1, [ctc2], false, stdlib.checkedBigNumberify('./index.rsh:30:18:decimal', stdlib.UInt_max, 10)));
    if (txn3.didTimeout) {
      
      const txn4 = await (ctc.sendrecv(5, 0, stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 4), [ctc6, ctc0, ctc6, ctc0, ctc0], [v271, v272, v279, v281, v282], [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []], [], true, true, false, (async (txn4) => {
        const sim_r = { txns: [] };
        sim_r.prevSt = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 2), v271, v272, v279, v281, v282]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 2), v271, v272, v279, v281]);
        const [] = txn4.data;
        const v382 = txn4.time;
        const v379 = txn4.from;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v381 = stdlib.addressEq(v279, v379);
        stdlib.assert(v381, {
          at: 'reach standard library:209:7:dot',
          fs: ['at ./index.rsh:59:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        sim_r.txns.push({
          amt: v281,
          kind: 'from',
          to: v279,
          tok: undefined
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined
          })
        sim_r.nextSt = stdlib.digest(ctc5, []);
        sim_r.nextSt_noTime = stdlib.digest(ctc5, []);
        sim_r.view = [ctc4, [stdlib.checkedBigNumberify('reach standard library:211:11:after expr stmt semicolon', stdlib.UInt_max, 0)]];
        sim_r.isHalt = true;
        
        return sim_r;
        })));
      const [] = txn4.data;
      const v382 = txn4.time;
      const v379 = txn4.from;
      ;
      const v381 = stdlib.addressEq(v279, v379);
      stdlib.assert(v381, {
        at: 'reach standard library:209:7:dot',
        fs: ['at ./index.rsh:59:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
        msg: 'sender correct',
        who: 'Bob'
        });
      ;
      stdlib.protect(ctc1, await interact.informTimeout(), {
        at: './index.rsh:39:33:application',
        fs: ['at ./index.rsh:38:13:application call to [unknown function] (defined at: ./index.rsh:38:25:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:37:32:function exp)', 'at ./index.rsh:59:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
        msg: 'informTimeout',
        who: 'Bob'
        });
      
      return;
      }
    else {
      const [v292] = txn3.data;
      const v295 = txn3.time;
      const v291 = txn3.from;
      ;
      const v294 = stdlib.addressEq(v271, v291);
      stdlib.assert(v294, {
        at: './index.rsh:58:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const v299 = stdlib.protect(ctc0, await interact.getCoin(), {
        at: './index.rsh:64:52:application',
        fs: ['at ./index.rsh:63:15:application call to [unknown function] (defined at: ./index.rsh:63:19:function exp)'],
        msg: 'getCoin',
        who: 'Bob'
        });
      
      
      const txn4 = await (ctc.sendrecv(6, 1, stdlib.checkedBigNumberify('./index.rsh:65:11:dot', stdlib.UInt_max, 5), [ctc6, ctc0, ctc6, ctc0, ctc2, ctc0, ctc0], [v271, v272, v279, v281, v292, v295, v299], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc0], true, true, stdlib.checkedBigNumberify('./index.rsh:30:18:decimal', stdlib.UInt_max, 10), (async (txn4) => {
        const sim_r = { txns: [] };
        sim_r.prevSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:65:11:dot', stdlib.UInt_max, 4), v271, v272, v279, v281, v292, v295]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:65:11:dot', stdlib.UInt_max, 4), v271, v272, v279, v281, v292]);
        const [v301] = txn4.data;
        const v304 = txn4.time;
        const v300 = txn4.from;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v303 = stdlib.addressEq(v279, v300);
        stdlib.assert(v303, {
          at: './index.rsh:65:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:67:17:after expr stmt semicolon', stdlib.UInt_max, 6), v271, v272, v279, v281, v292, v301, v304]);
        sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:67:17:after expr stmt semicolon', stdlib.UInt_max, 6), v271, v272, v279, v281, v292, v301]);
        sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:67:17:after expr stmt semicolon', stdlib.UInt_max, 0)]];
        sim_r.isHalt = false;
        
        return sim_r;
        })));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.recv(7, 0, [], false, false));
        const [] = txn5.data;
        const v363 = txn5.time;
        const v360 = txn5.from;
        ;
        const v362 = stdlib.addressEq(v271, v360);
        stdlib.assert(v362, {
          at: 'reach standard library:209:7:dot',
          fs: ['at ./index.rsh:66:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:39:33:application',
          fs: ['at ./index.rsh:38:13:application call to [unknown function] (defined at: ./index.rsh:38:25:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:37:32:function exp)', 'at ./index.rsh:66:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
          msg: 'informTimeout',
          who: 'Bob'
          });
        
        return;
        }
      else {
        const [v301] = txn4.data;
        const v304 = txn4.time;
        const v300 = txn4.from;
        ;
        const v303 = stdlib.addressEq(v279, v300);
        stdlib.assert(v303, {
          at: './index.rsh:65:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const txn5 = await (ctc.recv(8, 2, [ctc0, ctc0], false, stdlib.checkedBigNumberify('./index.rsh:30:18:decimal', stdlib.UInt_max, 10)));
        if (txn5.didTimeout) {
          
          const txn6 = await (ctc.sendrecv(9, 0, stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 6), [ctc6, ctc0, ctc6, ctc0, ctc2, ctc0, ctc0], [v271, v272, v279, v281, v292, v301, v304], [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []], [], true, true, false, (async (txn6) => {
            const sim_r = { txns: [] };
            sim_r.prevSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 6), v271, v272, v279, v281, v292, v301, v304]);
            sim_r.prevSt_noPrevTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 6), v271, v272, v279, v281, v292, v301]);
            const [] = txn6.data;
            const v344 = txn6.time;
            const v341 = txn6.from;
            
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const v343 = stdlib.addressEq(v279, v341);
            stdlib.assert(v343, {
              at: 'reach standard library:209:7:dot',
              fs: ['at ./index.rsh:72:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
              msg: 'sender correct',
              who: 'Bob'
              });
            sim_r.txns.push({
              amt: v281,
              kind: 'from',
              to: v279,
              tok: undefined
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.nextSt = stdlib.digest(ctc5, []);
            sim_r.nextSt_noTime = stdlib.digest(ctc5, []);
            sim_r.view = [ctc4, [stdlib.checkedBigNumberify('reach standard library:211:11:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = true;
            
            return sim_r;
            })));
          const [] = txn6.data;
          const v344 = txn6.time;
          const v341 = txn6.from;
          ;
          const v343 = stdlib.addressEq(v279, v341);
          stdlib.assert(v343, {
            at: 'reach standard library:209:7:dot',
            fs: ['at ./index.rsh:72:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:39:33:application',
            fs: ['at ./index.rsh:38:13:application call to [unknown function] (defined at: ./index.rsh:38:25:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:37:32:function exp)', 'at ./index.rsh:72:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
            msg: 'informTimeout',
            who: 'Bob'
            });
          
          return;
          }
        else {
          const [v309, v310] = txn5.data;
          const v313 = txn5.time;
          const v308 = txn5.from;
          ;
          const v312 = stdlib.addressEq(v271, v308);
          stdlib.assert(v312, {
            at: './index.rsh:71:11:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const v315 = stdlib.digest(ctc3, [v309, v310]);
          const v316 = stdlib.digestEq(v292, v315);
          stdlib.assert(v316, {
            at: 'reach standard library:65:17:application',
            fs: ['at ./index.rsh:73:24:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
            msg: null,
            who: 'Bob'
            });
          const v319 = stdlib.add(v310, v301);
          const v321 = stdlib.gt(v319, stdlib.checkedBigNumberify('./index.rsh:78:20:decimal', stdlib.UInt_max, 100));
          if (v321) {
            const v322 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:79:18:decimal', stdlib.UInt_max, 2), v272);
            ;
            stdlib.protect(ctc1, await interact.seeOutcome(v319), {
              at: './index.rsh:88:28:application',
              fs: ['at ./index.rsh:87:11:application call to [unknown function] (defined at: ./index.rsh:87:23:function exp)'],
              msg: 'seeOutcome',
              who: 'Bob'
              });
            
            return;}
          else {
            const v327 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:82:18:decimal', stdlib.UInt_max, 2), v272);
            ;
            stdlib.protect(ctc1, await interact.seeOutcome(v319), {
              at: './index.rsh:88:28:application',
              fs: ['at ./index.rsh:87:11:application call to [unknown function] (defined at: ./index.rsh:87:23:function exp)'],
              msg: 'seeOutcome',
              who: 'Bob'
              });
            
            return;}}
        }
      }
    }
  
  
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
byte "{{m4}}"
==
||
gtxn 2 Sender
byte "{{m5}}"
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
gtxn 2 Sender
byte "{{m8}}"
==
||
gtxn 2 Sender
byte "{{m9}}"
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
    }, {
    count: 11,
    size: 201
    }, {
    count: 10,
    size: 169
    }, {
    count: 12,
    size: 209
    }, {
    count: 11,
    size: 201
    }, {
    count: 14,
    size: 225
    }, {
    count: 12,
    size: 209
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
// "./index.rsh:43:9:dot"
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
load 254
load 254
+
store 253
// "CheckPay"
// "./index.rsh:49:9:dot"
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
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 2
int 2
itob
load 255
concat
load 254
itob
concat
gtxn 0 Sender
concat
load 253
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
// "[at ./index.rsh:50:41:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
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
// "[at ./index.rsh:50:41:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
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
// Handler 4
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
// compute state in HM_Check 2
int 2
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
// "./index.rsh:58:11:dot"
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
// "./index.rsh:58:11:dot"
// "[]"
load 255
gtxn 0 Sender
==
assert
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
load 252
itob
concat
load 251
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
gtxna 0 ApplicationArgs 8
store 253
gtxna 0 ApplicationArgs 9
btoi
store 252
// Handler 5
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
int 10
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
// compute state in HM_Check 2
int 2
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
// "[at ./index.rsh:59:43:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
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
// "[at ./index.rsh:59:43:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
load 253
gtxn 0 Sender
==
assert
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 253
==
assert
gtxn 4 Amount
load 252
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
// "./index.rsh:65:11:dot"
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
// "./index.rsh:65:11:dot"
// "[]"
load 253
gtxn 0 Sender
==
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
load 252
itob
concat
load 251
concat
load 250
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
gtxna 0 ApplicationArgs 8
store 253
gtxna 0 ApplicationArgs 9
btoi
store 252
gtxna 0 ApplicationArgs 10
store 251
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
// "reach standard library:209:7:dot"
// "[at ./index.rsh:66:43:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
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
// "[at ./index.rsh:66:43:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
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
load 252
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
gtxna 0 ApplicationArgs 13
btoi
store 248
// Handler 8
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
int 14
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
// "./index.rsh:71:11:dot"
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
// "./index.rsh:71:11:dot"
// "[]"
load 255
gtxn 0 Sender
==
assert
// Nothing
// "reach standard library:65:17:application"
// "[at ./index.rsh:73:24:application call to \"checkCommitment\" (defined at: reach standard library:64:8:function exp)]"
load 251
load 249
itob
load 248
itob
concat
keccak256
==
assert
load 248
load 250
+
int 100
>
bz l0
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 255
==
assert
gtxn 4 Amount
int 2
load 254
*
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
pop
l0:
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 253
==
assert
gtxn 4 Amount
int 2
load 254
*
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
gtxn 4 Fee
+
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
// Handler 9
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
load 250
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
// "[at ./index.rsh:72:43:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
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
// "[at ./index.rsh:72:43:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
load 253
gtxn 0 Sender
==
assert
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 253
==
assert
gtxn 4 Amount
load 252
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
        "internalType": "struct T6",
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
        "internalType": "struct T6",
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
                "internalType": "uint256",
                "name": "v281",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v282",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v292",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e4",
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
                "name": "v281",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v282",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
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
    "name": "e5",
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
                "name": "v281",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v292",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v295",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v301",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
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
                "name": "v281",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v292",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v295",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
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
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e7",
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
                "name": "v281",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v292",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v301",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v304",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v309",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v310",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e8",
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
                "name": "v281",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v292",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v301",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v304",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
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
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e9",
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
        "internalType": "struct T6",
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
        "internalType": "struct T6",
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
                "internalType": "uint256",
                "name": "v281",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v282",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v292",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m4",
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
                "name": "v281",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v282",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
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
    "name": "m5",
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
                "name": "v281",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v292",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v295",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v301",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T13",
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
                "name": "v281",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v292",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v295",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T14",
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
                "name": "v281",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v292",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v301",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v304",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v309",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v310",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m8",
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
                "name": "v281",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v292",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v301",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v304",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a16040805160208082018352438252825180820184526000808252925181528351808301849052905181850152835180820385018152606090910190935282519201919091209055611109806100826000396000f3fe60806040526004361061008a5760003560e01c80639532ef01116100595780639532ef01146100e4578063a44daa43146100f7578063bfdc69f61461010a578063e163d7c41461011d578063ef3d7a3a1461013057610091565b80632438df701461009657806325a98d59146100ab5780634cc82ad1146100be57806356de2b46146100d157610091565b3661009157005b600080fd5b6100a96100a4366004610ddb565b610143565b005b6100a96100b9366004610db8565b6102d9565b6100a96100cc366004610da6565b6103eb565b6100a96100df366004610d8b565b61055f565b6100a96100f2366004610dca565b61065c565b6100a9610105366004610d8b565b610779565b6100a9610118366004610d70565b610952565b6100a961012b366004610ddb565b610b0b565b6100a961013e366004610d70565b610c08565b60405161015790600190839060200161104a565b6040516020818303038152906040528051906020012060001c6000541461017d57600080fd5b6000808055604080516020810190915290815261019f600a6040840135611086565b43106101aa57600080fd5b6101b8602083013580611086565b8152346020830135146101ca57600080fd5b7f1ca594b20641191c893d80895212a20239e99e17b7304a35c096140ec34f22dd826040516101f99190610fe9565b60405180910390a16102456040518060a0016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b6102526020840184610d4f565b6001600160a01b0390811682526020938401358483019081523360408085019182529451606080860191825243608080880191825288516002818c015297518716888a0152945191870191909152915190931691840191909152905160a08301525160c0808301919091528251808303909101815260e09091019091528051910120600055565b6040516102ed906006908390602001611035565b6040516020818303038152906040528051906020012060001c6000541461031357600080fd5b60008055610326600a60c0830135611086565b43101561033257600080fd5b341561033d57600080fd5b3361034e6060830160408401610d4f565b6001600160a01b03161461036157600080fd5b6103716060820160408301610d4f565b6040516001600160a01b039190911690606083013580156108fc02916000818181858888f193505050501580156103ac573d6000803e3d6000fd5b507fd942081c00e0783013599d1067e28627907deb698319705d718c4f8638cceec5816040516103dc9190610fb8565b60405180910390a16000805533ff5b6040516103ff906006908390602001611035565b6040516020818303038152906040528051906020012060001c6000541461042557600080fd5b60008055610438600a60c0830135611086565b431061044357600080fd5b341561044e57600080fd5b3361045c6020830183610d4f565b6001600160a01b03161461046f57600080fd5b6040805160e083013560208201526101008301359181019190915260600160408051601f1981840301815291905280516020909101206080820135146104b457600080fd5b60646104c960a0830135610100840135611086565b111561054f576104dc6020820182610d4f565b6001600160a01b03166108fc6104f76020840135600261109e565b6040518115909202916000818181858888f1935050505015801561051f573d6000803e3d6000fd5b507f7839dffb49421c43ad2375fafc5e0e7fe00fe13dfc4f041def3d01a51120c71c816040516103dc9190610f8d565b6104dc6060820160408301610d4f565b604051610573906004908390602001611072565b6040516020818303038152906040528051906020012060001c6000541461059957600080fd5b600080556105ac600a60a0830135611086565b4310156105b857600080fd5b34156105c357600080fd5b336105d16020830183610d4f565b6001600160a01b0316146105e457600080fd5b6105f16020820182610d4f565b6040516001600160a01b039190911690606083013580156108fc02916000818181858888f1935050505015801561062c573d6000803e3d6000fd5b507f52f29590b7a33c9f2af14c2e2858ae5418a18262d881789f018d972bc9218855816040516103dc9190610f5d565b60408051600060208201528235918101919091526060016040516020818303038152906040528051906020012060001c6000541461069957600080fd5b60008055346020820135146106ad57600080fd5b6040805182358152602080840135908201527ff2c62eba998811305a23599b2e6d212befbd7ded3a73f4c08bfb9aefe08dc166910160405180910390a1610717604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b338152602082810135818301908152436040808501918252805160019481019490945284516001600160a01b0316908401529051606083015251608082015260a0015b60408051601f1981840301815291905280516020909101206000555050565b60405161078d906004908390602001611072565b6040516020818303038152906040528051906020012060001c600054146107b357600080fd5b600080556107c6600a60a0830135611086565b43106107d157600080fd5b34156107dc57600080fd5b336107ed6060830160408401610d4f565b6001600160a01b03161461080057600080fd5b7f5b0efdf573441f178439b5a8f6c1b19f0030d4dc9f308be7b6cb5a501bef75e08160405161082f9190610f41565b60405180910390a16108896040518060e0016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b6108966020830183610d4f565b6001600160a01b03168152602080830135908201526108bb6060830160408401610d4f565b6001600160a01b03908116604083810191825260608581013581860190815260808088013581880190815260c0808a013560a0808b0191825243838c01908152885160066020808301919091528d518d169a82019a909a52988c0151978901979097529751909816928601929092529151948401949094525192820192909252915160e0830152516101008201526101200161075a565b60405161096690600290839060200161105e565b6040516020818303038152906040528051906020012060001c6000541461098c57600080fd5b6000805561099f600a6080830135611086565b43106109aa57600080fd5b34156109b557600080fd5b336109c36020830183610d4f565b6001600160a01b0316146109d657600080fd5b7f3d182e6f2fea74a81e189829571ba90ae445412add5653bfab12c4bdf626347e81604051610a059190611019565b60405180910390a1610a586040518060c0016040528060006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b610a656020830183610d4f565b6001600160a01b0316815260208083013590820152610a8a6060830160408401610d4f565b6001600160a01b03908116604083810191825260608581013581860190815260a080880135608080890191825243838a01908152865160046020808301919091528b518b1698820198909852968a0151958701959095529551909616948401949094525192820192909252915160c08301525160e08201526101000161075a565b604051610b1f90600190839060200161104a565b6040516020818303038152906040528051906020012060001c60005414610b4557600080fd5b60008055610b58600a6040830135611086565b431015610b6457600080fd5b3415610b6f57600080fd5b33610b7d6020830183610d4f565b6001600160a01b031614610b9057600080fd5b610b9d6020820182610d4f565b6040516001600160a01b039190911690602083013580156108fc02916000818181858888f19350505050158015610bd8573d6000803e3d6000fd5b507fc3d6ba703f6ce931b1dd0e05e983d8be7c8ccc7f15219d844425151d85623013816040516103dc9190610fe9565b604051610c1c90600290839060200161105e565b6040516020818303038152906040528051906020012060001c60005414610c4257600080fd5b60008055610c55600a6080830135611086565b431015610c6157600080fd5b3415610c6c57600080fd5b33610c7d6060830160408401610d4f565b6001600160a01b031614610c9057600080fd5b610ca06060820160408301610d4f565b6040516001600160a01b039190911690606083013580156108fc02916000818181858888f19350505050158015610cdb573d6000803e3d6000fd5b507f7206b35298c8dc27a88d0202316b60bd31564f2bc4c02d3f4ff85b4f5102e0e6816040516103dc9190610f11565b80356001600160a01b0381168114610d2257600080fd5b919050565b600060c08284031215610d38578081fd5b50919050565b600060e08284031215610d38578081fd5b600060208284031215610d60578081fd5b610d6982610d0b565b9392505050565b600060c08284031215610d81578081fd5b610d698383610d27565b600060e08284031215610d9c578081fd5b610d698383610d3e565b60006101208284031215610d38578081fd5b60006101008284031215610d38578081fd5b600060408284031215610d38578081fd5b600060808284031215610d38578081fd5b6001600160a01b0380610dfe83610d0b565b1683526020820135602084015280610e1860408401610d0b565b16604084015250606081013560608301526080810135608083015260a081013560a083015260c081013560c08301525050565b6001600160a01b03610e5c82610d0b565b16825260208181013590830152604090810135910152565b6001600160a01b0380610e8683610d0b565b1683526020820135602084015280610ea060408401610d0b565b1660408401525060608181013590830152608090810135910152565b6001600160a01b0380610ece83610d0b565b1683526020820135602084015280610ee860408401610d0b565b16604084015250606081013560608301526080810135608083015260a081013560a08301525050565b60c08101610f1f8284610e74565b60a0830135801515808214610f3357600080fd5b8060a0850152505092915050565b60e08101610f4f8284610ebc565b60c092830135919092015290565b60e08101610f6b8284610ebc565b60c0830135801515808214610f7f57600080fd5b8060c0850152505092915050565b6101208101610f9c8284610dec565b60e083013560e083015261010080840135818401525092915050565b6101008101610fc78284610dec565b60e0830135801515808214610fdb57600080fd5b8060e0850152505092915050565b60808101610ff78284610e4b565b606083013580151580821461100b57600080fd5b806060850152505092915050565b60c081016110278284610e74565b60a092830135919092015290565b8281526101008101610d696020830184610dec565b82815260808101610d696020830184610e4b565b82815260c08101610d696020830184610e74565b82815260e08101610d696020830184610ebc565b60008219821115611099576110996110bd565b500190565b60008160001904831182151516156110b8576110b86110bd565b500290565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220597ee9913e3f09efc3b51fba408972393c872c31c55bca7765478511bc20bce564736f6c63430008020033`,
  deployMode: `DM_constructor`,
  views: {
    }
  };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };


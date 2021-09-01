import React,{} from 'react';
import {QuickStartCanvas} from 'react-pts-canvas'
import {Pt, Group, Line, Create, Sound, Triangle, Const, Geom,Util} from 'pts/dist/es5';
let pts = [];

const Pts = () => {
    return(
        <QuickStartCanvas 
        onAnimate={ (space, form, time) => {
          if (!pts) pts = Create.distributeRandom( space.innerBound, 100 );
  
          let path = [new Pt(), space.pointer];    
          let perpends = pts.map( (p) => [p, Line.perpendicularFromPt( path, p )] );
      
          form.strokeOnly("#42e", 5).line( path );
          form.strokeOnly("#123", 1).lines( perpends );
          form.fillOnly("#123").points( pts, 2, "circle" );
        }
      } 
      />
    );
}


export default Pts;
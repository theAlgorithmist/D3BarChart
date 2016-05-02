/** 
 * Copyright 2016 Jim Armstrong (www.algorithmist.net)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Bar Graph Directive
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * Modified from https://github.com/gdi2290/ng-vegas-angular2-d3 
 *
 * @version 1.0
 */
 import { Directive, ElementRef, Attribute, SimpleChange } from 'angular2/core';
 import * as d3 from 'd3';

 @Directive({

   selector: 'bar-graph',

   properties: ['data']
 })

 export class BarGraph 
 {
   private data: Array<number>;  // raw chart data
   private divs: any;            // DIV collection

  /**
   * Construct a new BarGraph
   *
   * @param elementRef: ElementRef (Injected) Reference to the DOM element associated with this Directive (see selector)
   *
   * @param width: string Width attribute from the containing template
   *
   * @param height: string Height attribute from the containing template
   *
   * @return Nothing
   */
   constructor ( elementRef: ElementRef, @Attribute('width') width: string, @Attribute('height') height: string ) 
   {
     let el: any    = elementRef.nativeElement;  // reference to <bar-graph> element from the main template
     let graph: any = d3.select(el);             // D3 chart container

     // setup the graph
     this.divs = graph
         .append('div')
         .attr({
           'class': 'chart'
         })
         .style({
           'width': width + 'px',
           'height': height + 'px',
         })
         .selectAll('div');
   }

   // Render the D3 Bar Chart
   private __render(newValue: any): void
   {
     if( !newValue ) 
       return;
   
     // join the data and chain styles and bar text ... all the usual suspects
     this.divs.data(newValue).enter().append('div')
         .transition().ease('elastic')
         .style('width', (d:any) => d + '%')
         .text( (d:any) => d + '%');
   }

   // update render on change
   private ngOnChanges( changes: { [propertyName: string]: SimpleChange } ): void 
   {
     this.__render( this.data );
   }
 }
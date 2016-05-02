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
 * Angular 2 and D3 - A2D3 ... my favorite Droid - this is the obligatory Bar Chart or equivalent of "Hello World" in D3
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * Inspired by https://github.com/gdi2290/ng-vegas-angular2-d3
 *
 * @version 1.0
 */
 import { Component, Directive } from 'angular2/core';
 import { BarGraph             } from '../directives/BarGraph';

 @Component(
 {
   selector: 'd3-demo',

   directives: [BarGraph],

   templateUrl: '/app/templates/main.html',
 })

 // This is the root component for the D3  demo
 export class D3DemoComponent 
 {
   private graphData: Array<Number>;  // bar graph data (bound to from template)

  /**
   * Create a bar chart demo component
   *
   * @return nothing This is the root component of the demo. 
   */
   constructor()
   {
     // assign the chart data and away we go ...
     this.graphData = [10, 20, 30, 40, 60];
   }
 }
/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);
document.getElementById('testClick').addEventListener('click',testClick)
document.getElementById('testClick2').addEventListener('click',testClick2)

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}

function testClick(){
	alert('执行了前端的点击事件')
	var successCallback = function(result) {
	  console.log('Toast displayed successfully: ' + result);
	};
	
	var errorCallback = function(error) {
	  console.error('An error occurred while displaying the toast: ' + error);
	};
	
	var message = '测试测试!';
	
	cordova.exec(successCallback, errorCallback, 'MyToast', 'coolMethod', [message]);
}

function testClick2(){
	alert('执行了前端的点击事件2')
	var successCallback = function(result) {
	  console.log('Toast displayed successfully: ' + result);
	};
	
	var errorCallback = function(error) {
	  console.error('An error occurred while displaying the toast: ' + error);
	};
	
	var message = '22222!';
	
	cordova.exec(successCallback, errorCallback, 'MyToast', 'testMethod', [message]);
}

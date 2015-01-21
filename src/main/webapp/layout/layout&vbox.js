Ext.onReady(function() {  
    var currentName;  
    var replace = function(config, name) {  
        var btns = Ext.getCmp('btns');  
        if (name && name != currentName) {  
            currentName = name;  
            btns.remove(0);  
            btns.add(Ext.apply(config));  
        }  
    };  
    var viewport = Ext.create('Ext.Viewport', {  
        layout:'border',  
        items: [{  
            id:'btns',  
            region:'west',  
            baseCls:'x-plain',  
            split:true,  
            width:150,  
            minWidth: 100,  
            maxWidth: 250,  
            layout:'fit',  
            margins: '5 0 5 5',  
            items: {  
                baseCls: 'x-plain',  
                html: '<p style="padding:10px;color:#556677;font-size:11px;">点击右边的按钮查看效果</p>'  
            }  
        },{  
            region:'center',  
            margins: '5 5 5 0',  
            layout: 'anchor',  
            items:[{  
                anchor: '100%',  
                baseCls:'x-plain',  
                layout: {  
                    type:'hbox',  
                    padding: 10  
                },  
                defaults:{  
                    margins:'0 5 0 0',  
                    pressed: false,  
                    toggleGroup:'btns',  
                    allowDepress: false  
                },  
                items: [{  
                    xtype:'button',  
                    text: 'Spaced / Align: left',  
                    handler: function(){  
                        replace({  
                            layout: {  
                                type:'vbox',  
                                padding:'5',  
                                align:'left'  
                            },  
                            defaults:{margins:'0 0 5 0'},  
                            items:[{  
                                xtype:'button',  
                                text: 'Button 1'  
                            },{  
                                xtype:'tbspacer',  
                                flex:1  
                            },{  
                                xtype:'button',  
                                text: 'Button 2'  
                            },{  
                                xtype:'button',  
                                text: 'Button 3'  
                            },{  
                                xtype:'button',  
                                text: 'Button 4',  
                                margins:'0'  
                            }]  
                        },  
                        'spaced');  
                    }  
                },{  
                    xtype:'button',  
                    text: 'Multi-Spaced / Align: left',  
                    handler: function(){  
                        replace({  
                            layout: {  
                                type:'vbox',  
                                padding:'5',  
                                align:'left'  
                            },  
                            defaults:{margins:'0 0 5 0'},  
                            items:[{  
                                xtype:'button',  
                                text: 'Button 1'  
                            },{  
                                xtype:'tbspacer',  
                                flex:1  
                            },{  
                                xtype:'button',  
                                text: 'Button 2'  
                            },{  
                                xtype:'tbspacer',  
                                flex:1  
                            },{  
                                xtype:'button',  
                                text: 'Button 3'  
                            },{  
                                xtype:'tbspacer',  
                                flex:1  
                            },{  
                                xtype:'button',  
                                text: 'Button 4',  
                                margins:'0'  
                            }]  
                        }, 'multi spaced - align left');  
                    }  
                },{  
                    xtype:'button',  
                    text: 'Align: left',  
                    handler: function(){  
                        replace({  
                            layout: {  
                                type:'vbox',  
                                padding:'5',  
                                align:'left'  
                            },  
                            defaults:{margins:'0 0 5 0'},  
                            items:[{  
                                xtype:'button',  
                                text: 'Button 1'  
                            },{  
                                xtype:'button',  
                                text: 'Button 2'  
                            },{  
                                xtype:'button',  
                                text: 'Button 3'  
                            },{  
                                xtype:'button',  
                                text: 'Button 4'  
                            }]  
                        }, 'align left');  
                    }  
                },{  
                    xtype:'button',  
                    text: 'Align: center',  
                    handler: function(){  
                        replace({  
                            layout: {  
                                type:'vbox',  
                                padding:'5',  
                                align:'center'  
                            },  
                            defaults:{margins:'0 0 5 0'},  
                            items:[{  
                                xtype:'button',  
                                text: 'Button 1'  
                            },{  
                                xtype:'button',  
                                text: 'Button 2'  
                            },{  
                                xtype:'button',  
                                text: 'Button 3'  
                            },{  
                                xtype:'button',  
                                text: 'Button 4'  
                            }]  
                        }, 'align center');  
                    }  
                },{  
                    xtype:'button',  
                    text: 'Align: stretch',  
                    handler: function(){  
                        replace({  
                            layout: {  
                                type:'vbox',  
                                padding:'5',  
                                align:'stretch'  
                            },  
                            defaults:{margins:'0 0 5 0'},  
                            items:[{  
                                xtype:'button',  
                                text: 'Button 1'  
                            },{  
                                xtype:'button',  
                                text: 'Button 2'  
                            },{  
                                xtype:'button',  
                                text: 'Button 3'  
                            },{  
                                xtype:'button',  
                                text: 'Button 4'  
                            }]  
                        }, 'align stretch');  
                    }  
                },{  
                    xtype:'button',  
                    text: 'Align: stretchmax',  
                    handler: function(){  
                        replace({  
                            layout: {  
                                type:'vbox',  
                                padding:'5',  
                                align:'stretchmax'  
                            },  
                            defaults:{margins:'0 0 5 0'},  
                            items:[{  
                                xtype:'button',  
                                text: 'Jamie'  
                            },{  
                                xtype:'button',  
                                text: 'Aaron'  
                            },{  
                                xtype:'button',  
                                text: 'Tommy'  
                            },{  
                                xtype:'button',  
                                text: 'Ed '  
                            }]  
                        }, 'align stretchmax');  
                    }  
                }]  
            },{  
                anchor: '100%',  
                baseCls:'x-plain',  
                layout: {  
                    type:'hbox',  
                    padding: '0 10 10'  
                },  
                defaults:{  
                    margins:'0 5 0 0',  
                    pressed: false,  
                    toggleGroup:'btns',  
                    allowDepress: false  
                },  
                items: [{  
                    xtype:'button',  
                    text: 'Flex: Even / Align: center',  
                    handler: function(){  
                        replace({  
                            layout: {  
                                type:'vbox',  
                                padding:'5',  
                                align:'center'  
                            },  
                            defaults:{margins:'0 0 5 0'},  
                            items:[{  
                                xtype:'button',  
                                text: 'Button 1',  
                                flex:1  
                            },{  
                                xtype:'button',  
                                text: 'Button 2',  
                                flex:1  
                            },{  
                                xtype:'button',  
                                text: 'Button 3',  
                                flex:1  
                            },{  
                                xtype:'button',  
                                text: 'Button 4',  
                                flex:1,  
                                margins:'0'  
                            }]  
                        }, 'align flex even');  
                    }  
                },{  
                    xtype:'button',  
                    text: 'Flex: Ratio / Align: center',  
                    handler: function(){  
                        replace({  
                            layout: {  
                                type:'vbox',  
                                padding:'5',  
                                align:'center'  
                            },  
                            defaults:{margins:'0 0 5 0'},  
                            items:[{  
                                xtype:'button',  
                                text: 'Button 1',  
                                flex:1  
                            },{  
                                xtype:'button',  
                                text: 'Button 2',  
                                flex:1  
                            },{  
                                xtype:'button',  
                                text: 'Button 3',  
                                flex:1  
                            },{  
                                xtype:'button',  
                                text: 'Button 4',  
                                flex:3,  
                                margins:'0'  
                            }]  
                        }, 'align flex ratio');  
                    }  
                },{  
                    xtype:'button',  
                    text: 'Flex + align:Stretch',  
                    handler: function(){  
                        replace({  
                            layout: {  
                                type:'vbox',  
                                padding:'5',  
                                align:'stretch'  
                            },  
                            defaults:{margins:'0 0 5 0'},  
                            items:[{  
                                xtype:'button',  
                                text: 'Button 1',  
                                flex:1  
                            },{  
                                xtype:'button',  
                                text: 'Button 2',  
                                flex:1  
                            },{  
                                xtype:'button',  
                                text: 'Button 3',  
                                flex:1  
                            },{  
                                xtype:'button',  
                                text: 'Button 4',  
                                flex:3,  
                                margins:'0'  
                            }]  
                        }, 'align flex + stretch');  
                    }  
                },{  
                    xtype:'button',  
                    text: 'Pack: start / Align: center',  
                    handler: function(){  
                        replace({  
                            layout: {  
                                type:'vbox',  
                                padding:'5',  
                                pack:'start',  
                                align:'center'  
                            },  
                            defaults:{margins:'0 0 5 0'},  
                            items:[{  
                                xtype:'button',  
                                text: 'Button 1'  
                            },{  
                                xtype:'button',  
                                text: 'Button 2'  
                            },{  
                                xtype:'button',  
                                text: 'Button 3'  
                            },{  
                                xtype:'button',  
                                text: 'Button 4'  
                            }]  
                        }, 'align pack start + align center');  
                    }  
                },{  
                    xtype:'button',  
                    text: 'Pack: center / Align: center',  
                    handler: function(){  
                        replace({  
                            layout: {  
                                type:'vbox',  
                                padding:'5',  
                                pack:'center',  
                                align:'center'  
                            },  
                            defaults:{margins:'0 0 5 0'},  
                            items:[{  
                                xtype:'button',  
                                text: 'Button 1'  
                            },{  
                                xtype:'button',  
                                text: 'Button 2'  
                            },{  
                                xtype:'button',  
                                text: 'Button 3'  
                            },{  
                                xtype:'button',  
                                text: 'Button 4',  
                                margins:'0'  
                            }]  
                        }, 'align pack center + align center');  
                    }  
                },{  
                    xtype:'button',  
                    text: 'Pack: end / Align: center',  
                    handler: function(){  
                        replace({  
                            layout: {  
                                type:'vbox',  
                                padding:'5',  
                                pack:'end',  
                                align:'center'  
                            },  
                            defaults:{margins:'0 0 5 0'},  
                            items:[{  
                                xtype:'button',  
                                text: 'Button 1'  
                            },{  
                                xtype:'button',  
                                text: 'Button 2'  
                            },{  
                                xtype:'button',  
                                text: 'Button 3'  
                            },{  
                                xtype:'button',  
                                text: 'Button 4',  
                                margins:'0'  
                            }]  
                        }, 'align pack end + align center');  
                    }  
                }]  
            },{
            	xtype:'panel',
            	html:'<h5>align : String<h5>'+
            			'<dl><dt>控制子组件在容器中的对齐方式, 此参数的有效值有以下几个:</dt>'+
            			'<dd>left :  子组件是水平排列在容器的左侧【默认】</dd>'+
            			'<dd>center : 子组件是水平排列在容器中的中间（mid-width）</dd>'+
            			'<dd>right :  子组件是水平排列在容器的右侧</dd>'+
            			'<dd>stretch : 子组件是横向延伸填充容器的宽度</dd>'+
            			'<dd>stretchmax : 各子组件的宽度拉伸至与最宽的子组件的宽度相等</dd></dl>'+
            		'<h5>pack : String<h5>'+
            			'<dl><dt>控制子组件如何被打包在一起. 此属性的有效值为:</dt>'+
            			'<dd>start - 子组件被包在一起放在容器的顶部 【默认】</dd>'+
            			'<dd>center - 子组件被包在一起放在容器里垂直居中(mid-height)</dd>'+
            			'<dd>end - 子组件被包在一起放在容器的底部</dd></dl>'
            }]  
        }]  
    });  
});
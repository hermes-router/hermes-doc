Search.setIndex({docnames:["advanced","bookkeeper","cleaner","common","dispatch","dispatcher","faq","index","install","intro","modules","monitoring","router","routing","usage","webgui","webinterface"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.todo":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["advanced.rst","bookkeeper.rst","cleaner.rst","common.rst","dispatch.rst","dispatcher.rst","faq.rst","index.rst","install.rst","intro.rst","modules.rst","monitoring.rst","router.rst","routing.rst","usage.rst","webgui.rst","webinterface.rst"],objects:{"":{bookkeeper:[1,0,0,"-"],cleaner:[2,0,0,"-"],dispatcher:[5,0,0,"-"],router:[12,0,0,"-"],webgui:[15,0,0,"-"]},"common.config":{checkFolders:[3,1,1,""],read_config:[3,1,1,""],save_config:[3,1,1,""]},"common.helper":{RepeatedTimer:[3,2,1,""],g_log:[3,1,1,""],isTerminated:[3,1,1,""],sendToGraphite:[3,1,1,""],triggerTerminate:[3,1,1,""]},"common.helper.RepeatedTimer":{start:[3,3,1,""],stop:[3,3,1,""]},"common.monitor":{configure:[3,1,1,""],h_events:[3,2,1,""],s_events:[3,2,1,""],send_event:[3,1,1,""],send_register_series:[3,1,1,""],send_series_event:[3,1,1,""],send_webgui_event:[3,1,1,""],severity:[3,2,1,""],w_events:[3,2,1,""]},"common.monitor.h_events":{BOOT:[3,4,1,""],CONFIG_UPDATE:[3,4,1,""],PROCESSING:[3,4,1,""],SHUTDOWN:[3,4,1,""],SHUTDOWN_REQUEST:[3,4,1,""],UNKNOWN:[3,4,1,""]},"common.monitor.s_events":{CLEAN:[3,4,1,""],DISCARD:[3,4,1,""],DISPATCH:[3,4,1,""],ERROR:[3,4,1,""],REGISTERED:[3,4,1,""],ROUTE:[3,4,1,""],UNKNOWN:[3,4,1,""]},"common.monitor.severity":{CRITICAL:[3,4,1,""],ERROR:[3,4,1,""],INFO:[3,4,1,""],WARNING:[3,4,1,""]},"common.monitor.w_events":{LOGIN:[3,4,1,""],LOGIN_FAIL:[3,4,1,""],LOGOUT:[3,4,1,""],RULE_CREATE:[3,4,1,""],RULE_DELETE:[3,4,1,""],RULE_EDIT:[3,4,1,""],SERVICE_CONTROL:[3,4,1,""],TARGET_CREATE:[3,4,1,""],TARGET_DELETE:[3,4,1,""],TARGET_EDIT:[3,4,1,""],UNKNOWN:[3,4,1,""],USER_CREATE:[3,4,1,""],USER_DELETE:[3,4,1,""],USER_EDIT:[3,4,1,""]},"common.rule_evaluation":{parse_rule:[3,1,1,""],replace_tags:[3,1,1,""],test_rule:[3,1,1,""]},"dispatch.process_dcmsend_result":{create_arg_parser:[4,1,1,""],parse:[4,1,1,""]},"dispatch.retry":{increase_retry:[4,1,1,""]},"dispatch.send":{execute:[4,1,1,""]},"dispatch.status":{has_been_send:[4,1,1,""],is_ready_for_sending:[4,1,1,""],is_target_json_valid:[4,1,1,""]},"routing.process_series":{FileLock:[13,2,1,""],get_routing_targets:[13,1,1,""],process_error_files:[13,1,1,""],process_series:[13,1,1,""],push_series_discard:[13,1,1,""],push_series_outgoing:[13,1,1,""]},"routing.process_series.FileLock":{free:[13,3,1,""]},"webgui.ExtendedUser":{is_admin:[15,3,1,""]},"webgui.SessionAuthBackend":{authenticate:[15,3,1,""]},"webinterface.services":{read_services:[16,1,1,""]},"webinterface.tagslist":{read_tagslist:[16,1,1,""]},"webinterface.users":{create_users:[16,1,1,""],evaluate_password:[16,1,1,""],hash_password:[16,1,1,""],is_admin:[16,1,1,""],needs_change_password:[16,1,1,""],read_users:[16,1,1,""],save_users:[16,1,1,""]},bookkeeper:{create_database:[1,1,1,""],execute_db_operation:[1,1,1,""],parse_and_submit_tags:[1,1,1,""],post_hermes_event:[1,1,1,""],post_series_event:[1,1,1,""],post_webgui_event:[1,1,1,""],register_dicom:[1,1,1,""],register_series:[1,1,1,""],shutdown:[1,1,1,""],startup:[1,1,1,""],test_endpoint:[1,1,1,""]},cleaner:{clean:[2,1,1,""],clean_discard:[2,1,1,""],clean_success:[2,1,1,""],delete_folder:[2,1,1,""],exit_cleaner:[2,1,1,""],find_series_uid:[2,1,1,""],receiveSignal:[2,1,1,""],terminateProcess:[2,1,1,""]},common:{config:[3,0,0,"-"],helper:[3,0,0,"-"],monitor:[3,0,0,"-"],rule_evaluation:[3,0,0,"-"],version:[3,0,0,"-"]},dispatch:{process_dcmsend_result:[4,0,0,"-"],retry:[4,0,0,"-"],send:[4,0,0,"-"],status:[4,0,0,"-"]},dispatcher:{dispatch:[5,1,1,""],exit_dispatcher:[5,1,1,""],receiveSignal:[5,1,1,""],terminateProcess:[5,1,1,""]},router:{exitRouter:[12,1,1,""],receiveSignal:[12,1,1,""],runRouter:[12,1,1,""],terminateProcess:[12,1,1,""]},routing:{process_series:[13,0,0,"-"]},webgui:{ExtendedUser:[15,2,1,""],SessionAuthBackend:[15,2,1,""],add_new_user:[15,1,1,""],add_rule:[15,1,1,""],add_target:[15,1,1,""],async_run:[15,1,1,""],configuration:[15,1,1,""],control_services:[15,1,1,""],emergency_response:[15,1,1,""],error:[15,1,1,""],get_user_information:[15,1,1,""],homepage:[15,1,1,""],launch_emergency_app:[15,1,1,""],login:[15,1,1,""],login_post:[15,1,1,""],logout:[15,1,1,""],not_found:[15,1,1,""],rules_delete_post:[15,1,1,""],rules_edit:[15,1,1,""],rules_edit_post:[15,1,1,""],rules_test:[15,1,1,""],server_error:[15,1,1,""],settings_edit:[15,1,1,""],show_first_log:[15,1,1,""],show_log:[15,1,1,""],show_rules:[15,1,1,""],show_targets:[15,1,1,""],show_users:[15,1,1,""],targes_edit_post:[15,1,1,""],targets_delete_post:[15,1,1,""],targets_edit:[15,1,1,""],targets_test_post:[15,1,1,""],users_delete_post:[15,1,1,""],users_edit:[15,1,1,""],users_edit_post:[15,1,1,""]},webinterface:{services:[16,0,0,"-"],tagslist:[16,0,0,"-"],users:[16,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method","4":"py:attribute"},terms:{"64bit":8,"case":[4,6,8,9],"class":[3,13,15],"default":[6,8],"final":[8,9],"function":[1,2,3,4,5,8,9,12,16],"new":[1,4,6,8,9,15,16],"public":8,"return":[4,13,15],"switch":15,"true":[4,15],"while":[3,9],But:6,For:[8,9,10],LTS:8,Not:6,The:[1,2,3,4,5,6,8,9,10,13,15,16],There:9,These:[8,10],WITH:8,_not_:4,abl:6,abnorm:9,about:[3,8,9,15],abov:8,accident:[8,9],accordingli:6,account:[8,9,16],achiev:8,act:9,activ:[1,3,9],add:8,add_new_us:15,add_rul:15,add_target:15,addit:[6,8],address:[3,8],addus:8,admin:16,administr:[8,9],advanc:7,after:[2,3,8,9,16],afterward:8,again:[6,9],agent:9,alert:[9,13],all:[1,3,6,8,9,13,15],allow:9,alreadi:[4,8,10],also:[3,4,6,8,9,13],alter:8,alwai:[2,15],analysi:[8,9],analyz:8,ani:[4,6,9],anoth:3,appear:8,appli:[6,8,9],applianc:15,applic:[8,9,15],apt:[8,10],architectur:7,arg:[2,3,5,12],argument:3,argumentpars:4,arriv:1,ask:[8,15],assign:8,associ:3,async:[1,3,15],async_run:15,asynchron:3,asyncio:[2,5,12],attract:9,authent:15,authenticationbackend:15,author:9,autom:9,automat:[6,8,9],avail:[9,15],avoid:3,ayncio:15,back:15,balanc:9,base:[3,9,13,15],basic:7,becaus:6,been:[3,4,8,9,10,16],befor:[2,8,9],being:4,below:8,bin:10,binari:[8,10],bodi:1,bookkeeer:7,bookkeep:[3,7,8,10,13],boot:3,bottom:8,bound:6,buffer:[6,8],bug:6,build:[8,10],button:8,call:[1,3,8,12,16],callback:[3,12],calllback:3,can:[8,9,10,15,16],capabl:9,card:6,cardiac:9,central:[9,12],certain:9,challeng:9,chang:[3,8,9,15,16],charg:9,check:[3,4,9,16],checkfold:3,chmod:8,choos:6,clean:[2,3],clean_discard:2,clean_success:2,cleaner:[7,10],clear:[8,13,15],click:8,clone:8,cmd:15,cmr:9,code:[7,9,16],collect:8,com:8,come:[0,11,14],command:[4,8,15],commerci:[6,9],common:[7,10],commun:6,compar:[3,9],compat:15,compil:[8,10],complet:[7,9],compon:9,compos:8,conf:8,config_upd:3,configur:[3,6,7,9,15,16],congratul:7,connect:[1,3,6,8,9,15],consist:9,consum:9,contain:[8,10],continu:[3,9],contrast:9,contrib:8,control_servic:15,conveni:[8,9],cooki:15,copi:[4,8,10],correct:16,correctli:8,correspond:[3,6,9,10,13,15],could:8,counter:4,crash:9,creat:[1,4,7,9,15,16],create_arg_pars:4,create_databas:1,create_us:16,createdb:8,createus:8,critic:3,current:[3,6,15],custom:9,customiz:9,daemon:8,data:[2,7,9],databas:[1,8,9],date:9,dcmsend:4,dcmtk:[6,8,9,10],debug:15,decid:[8,12],dedic:[8,9],defin:[3,9,15],delet:[2,4,6,9,15],delete_fold:2,depart:9,depend:10,deploy:8,describ:8,descript:3,design:[6,9],desir:[6,9,13],destin:[4,9],destructor:13,dev:10,develop:[7,10],diagnost:3,dialog:3,dicom:[1,3,4,5,6,8,9,13,16],dictionari:[3,4,15],differ:[5,6,8,9],direct:15,directori:8,discard:[2,3,6,8,9,13],discard_fold:2,disconnect:1,disk:[3,6,16],dispatch:[3,6,7,10],dispatcher2:6,distribut:9,divid:10,docker:8,document:[7,9],doe:[1,16],doesn:8,done:[4,8],doubl:4,download:[8,9],drive:[6,8],drop:8,duplic:6,dure:[3,8],each:[6,9,13],easi:[8,9],easier:8,easili:9,echo:15,edit:[8,15],either:[9,15],emerg:15,emergency_respons:15,enabl:[6,8],encount:6,endpoint:1,ensur:9,enter:8,entri:[2,5,6,15],env:8,environ:[6,8,9,10],error:[3,4,8,9,13,15],error_fold:4,especi:9,essenti:8,establish:[6,9],etc:8,evalu:[3,12,13,15],evaluate_password:16,evalut:15,event:[1,2,3,5,9,12],everi:[6,9,12],everyth:[3,8],exactli:8,exampl:[9,15,16],exc:15,except:[3,6,13],execut:[1,3,4,5,8,15],execute_db_oper:1,exist:[1,3,4,8,9,16],exit:[3,8],exit_clean:2,exit_dispatch:5,exit_funct:3,exitrout:12,extend:9,extendedus:15,extens:[7,9],extract:[6,9],fail:9,fals:[4,15],familiar:8,faq:7,featur:9,file:[1,3,4,6,7,8,10,13,16],file_count:3,filelist:13,filelock:13,filenam:2,find:2,find_series_uid:2,finish:[3,8],first:[2,7,15],fist:8,flavor:8,flexibl:[7,8],focus:9,folder:[2,3,4,6,8,9,10,13],follow:[8,10],foot:6,fork:[6,9],form:15,format:3,forward:15,frame:[2,5,12],free:[9,13],frequent:9,from:[1,2,3,6,8,9,13,16],full:9,fulli:3,futur:4,g_log:3,gcc:8,gener:3,get:15,get_routing_target:13,get_user_inform:15,getdcmtag:[1,10],getredash:8,getseqparam:16,git:8,github:[6,8],githubusercont:8,give:6,given:[2,3,4,13,15,16],gpl:9,grant:8,graphic:15,graphit:[3,7],greater:8,green:8,guid:7,h_event:3,had:[6,9],handl:[3,6],happen:4,hard:8,has:[2,3,4,9,10,16],has_been_send:4,hash:16,hash_password:16,have:[3,8,9,10,15,16],hefti:9,helper:[1,13],here:8,herm:[1,2,3,5,10,12,15],hermes_bookkeep:8,hermes_clean:8,hermes_dispatch:8,hermes_receiv:8,hermes_rout:8,hermes_ui:8,high:9,higher:[8,9],highli:8,his:16,histori:9,home:8,homepag:15,host:8,howev:[6,8],http:[8,15],icon:8,ideal:6,imag:[6,9],implement:13,includ:[8,10],incom:[6,8,9,13],incorrect:15,increas:[4,16],increase_retri:4,index:15,indic:4,individu:[9,16],info:3,inform:[1,3,7,8,9,15],instal:[7,9,10],instanc:[3,6,9,13,16],instead:[6,8],instruct:[8,9,10],insuffici:9,integr:[8,9],interact:9,interfac:[7,9,15],intern:9,interv:3,intuit:9,invalid:[3,15],is_admin:[15,16],is_ready_for_send:4,is_target_json_valid:4,istermin:3,journalctl:8,json:[4,6,8],just:[6,8],keep:[6,8,9],kei:[4,8],kept:[6,9],kwarg:3,languag:9,larg:6,larger:9,last:[3,16],lastli:9,later:[8,9],launch:[6,15],launch_emergency_app:15,learn:8,least:4,let:8,level:3,libdcmtk:10,librari:16,licens:9,like:8,limit:[8,9],line:8,linux:8,list:[8,10,13,16],listen:[8,9],listen_address:8,load:[6,9],localhost:8,locat:8,lock:[3,4,13],log:[1,7,15],login:[3,8,15,16],login_fail:3,login_post:15,logout:[3,15],look:13,loop:[2,3,5,12],lost:6,lot:6,machin:[6,8],made:[8,9],main:[2,3,5,8,12],maintain:8,make:[8,9,10],manag:9,mandatori:4,mani:9,manual:9,master:8,matter:8,maximum:4,md5:8,mean:9,medic:9,messag:15,might:8,mine:9,minim:15,mkdir:8,modif:8,modifi:[6,9,16],modul:[1,3,8,9,10,12,16],modular:9,monitor:[7,8,9],more:[3,8,9],moreov:[6,9],move:[4,9,13],much:8,multipl:[6,9,16],name:[6,8,10,16],nano:8,necessari:[6,8,9],need:[6,8,9],needs_change_password:16,neither:6,network:6,newer:8,newli:1,next:8,nginx:8,node:9,nor:6,normal:[8,15,16],not_found:15,note:[6,8],notif:[1,8,9],now:8,number:[9,10],numer:6,object:[3,4,13],offi:[6,8],offic:9,often:9,older:2,oldest:2,omit:8,onc:9,one:[1,3,4,6,9],onli:[2,3,5,6,8,9,12,16],open:[7,8,9],oper:[1,8],opt:8,optic:6,option:7,other:[8,9],otherwis:[6,15],out:[6,9],outgo:[4,8,13],output:3,outward:6,own:8,own_set:15,packag:[7,9,10],page:[8,15],pai:9,parallel:6,paramet:15,pars:[3,4,16],parse_and_submit_tag:1,parse_rul:3,part:[2,10],particular:8,pass:[2,9,15],passlib:16,password:[8,15,16],path:[4,8],path_for_lockfil:13,pathlib:4,payload:1,per:6,perform:16,period:[9,13],permiss:8,person:9,pg_hba:8,ping:15,pleas:6,point:15,port:8,possibl:[8,9],post:15,post_hermes_ev:1,post_series_ev:1,post_webgui_ev:1,postgr:[1,8],postgresql:[7,9],power:[8,9],prefer:10,prepar:[1,8,9],prevent:[4,8],previous:1,price:9,print:6,prior:9,privileg:8,pro:10,problem:6,procedur:8,process:[2,3,6,9,12,13],process_error_fil:13,product:6,project:10,prone:9,proper:10,properli:6,properti:15,prototyp:9,provid:[6,8,9],proxi:9,psql:8,purpos:[2,5,12],push_series_discard:13,push_series_outgo:13,putsomethingrandomher:8,pwd:8,python:[4,6,8,9,10],qt5:10,qtcreator:10,rais:[3,13],random:8,rang:[6,15],raw:8,reach:[4,6],read:[1,3,8,9,16],read_config:3,read_servic:16,read_tagslist:16,read_us:16,readi:4,reason:6,receiv:[1,3,6,8],receivesign:[2,5,12],recept:9,recommend:[6,8,10],record:[8,9],recov:9,redash:7,redirect:15,regist:[1,3],register_dicom:1,register_seri:1,relat:[1,3],releas:[9,10],relev:[1,9],reliabl:9,remain:13,remov:[2,5,12,13],renam:6,render:15,repeatedtim:3,replac:[3,8,9],replace_tag:3,repositori:10,request:[1,9,15],requir:[3,8,9,10],rerun:8,research:[6,9],resend:6,respect:8,respons:2,restart:[8,9],result:4,result_fil:4,retent:[2,9],retri:9,retry_delai:4,retry_max:4,review:9,right:[8,9,16],rout:[3,6,7,9,10,12,15],router:[1,6,8,10,16],rule:[3,6,9,12,13,15],rule_cr:3,rule_delet:3,rule_edit:3,rules_delete_post:15,rules_edit:15,rules_edit_post:15,rules_test:15,run:[3,6,8],runn:8,runrout:12,runtim:[6,8],s_event:3,salt:16,same:[9,15],save:[3,8],save_config:3,save_us:16,scalabl:9,scale:[6,9],scanner:9,schema:8,script:8,sdk:10,second:[3,12],secret:8,secret_kei:8,section:[0,8,11,14],see:[8,15],seed:16,select:8,send:[3,9,13],send_ev:3,send_register_seri:3,send_series_ev:3,send_webgui_ev:3,sender:9,sendtographit:3,sent:[4,6,9,12],separ:[6,9,10,13],seri:[1,2,3,4,6,9,12,13],series_uid:[3,13],server:[6,8,9],server_error:15,servic:[6,7,8,9,10],service_control:3,session:15,sessionauthbackend:15,set:[3,4,8,9,15],settings_edit:15,setup:[6,8],sever:[3,8],share:10,ship:8,should:[2,3,4,5,6,8,9,10,12,15,16],show:15,show_first_log:15,show_log:15,show_rul:15,show_target:15,show_us:15,shown:8,shutdown:[1,2,3,5,12],shutdown_request:3,sign:2,signalnumb:[2,5,12],similar:3,simpl:[7,9],simpleus:15,simultan:9,sinc:[6,16],situat:[6,9],small:6,softwar:[8,9],solut:[7,9],some:4,someth:8,sometim:9,soon:[0,11,14],sourc:[1,2,3,4,5,7,8,9,12,13,15,16],source_fold:4,space:6,special:9,specif:[3,9],specifi:15,spuriou:13,sql:8,ssd:6,ssh:8,staff:9,starlett:15,start:[2,3,7],startup:1,statu:[9,15],step:8,still:9,stop:[2,3,5,12],storag:7,store:[1,3,8,9,16],storescp:[6,9],str:15,string:3,studi:9,studio:10,subfold:[8,13],submit:15,success:[2,4,8],success_fold:[2,4],successfulli:9,sudo:[8,10],suffici:6,support:16,sure:10,suspend:3,system:[1,8,9,15],systemctl:8,systemd:[6,8],tabl:[1,8],tag:[3,6,9,16],taglist:13,tagnam:3,take:6,targes_edit_post:15,target:[3,4,5,9,12,13,15],target_aet_target:4,target_cr:3,target_delet:3,target_edit:3,target_ip:4,target_port:4,targets_delete_post:15,targets_edit:15,targets_test_post:15,task:[3,9],tell:8,templat:[8,15],temporarili:9,termin:[3,12],terminateprocess:[2,5,12],test:[1,2,3,5,8,9,12,15],test_endpoint:1,test_rul:3,than:[2,8],thei:1,therefor:8,thi:[0,3,4,6,8,9,11,14,16],three:9,through:[6,8,9],thu:8,time:[2,3,4,6,8,9,15],timer:3,tool:9,toolkit:[6,8],top:8,traceback:15,transfer:[5,9],transfer_target:13,transmit:3,trigger:[2,3,5,9,12],triggertermin:3,two:[8,9],txt:10,type:[3,8],ubuntu:8,uid:[2,13],unavail:9,uncom:8,under:9,underli:6,uniqu:9,unknown:3,unless:8,unlik:9,unsuccess:9,until:8,updat:[3,8,15,16],url:15,usag:[7,8],use:[6,7,8,9],used:[6,8,9,10,16],user:[3,7,8,9,15],user_cr:3,user_delet:3,user_edit:3,usernam:[15,16],users_delete_post:15,users_edit:15,users_edit_post:15,uses:[6,8,9],using:[3,8,9,10,15,16],util:8,valid:[3,4,8,15],valu:[3,8,15,16],variabl:3,variou:9,veri:8,version:[9,10],via:[8,15],virtual:6,visual:[8,10],w_event:3,wai:15,wait:[3,4,9],want:[6,8],warn:3,web:[7,8,9,15],webbrows:8,webgui:[1,3,7,8,10],webinterfac:[7,10],well:[6,8,9],wget:8,what:[7,8],when:[3,6,8,9,12,15],whenev:[1,6,8],where:6,which:[1,2,6,8,9,10,12,13],wide:[6,9],without:[8,9],word:8,work:8,work_dir:2,worker:3,would:6,wrapper:3,write:[8,16],written:9,yet:[4,9],yml:8,you:[8,10],your:8},titles:["Advanced Configuration","Service bookkeeper","Service cleaner","Package common","Package dispatch","Service dispatcher","FAQ","Hermes DICOM Router","Installation","What is Hermes?","Code Documentation","Monitoring","Service router","Package routing","Usage","Service webgui","Package webinterface"],titleterms:{advanc:0,approv:6,architectur:9,basic:8,been:6,bookkeeer:11,bookkeep:[1,9],can:6,cleaner:[2,9],code:10,common:3,complet:8,config:3,configur:[0,8],congratul:8,creat:8,data:8,dicom:7,dispatch:[4,5,9],document:10,doe:6,faq:6,fda:6,file:11,first:8,further:6,getdcmtag:6,graphit:11,hardwar:6,has:6,have:6,helper:3,herm:[6,7,8,9],improv:6,instal:8,label:6,log:11,modul:6,monitor:[3,11],offer:6,packag:[3,4,13,16],perform:6,period:6,postgresql:8,process_dcmsend_result:4,process_seri:13,profession:6,purpos:6,receiv:9,redash:[8,11],requir:6,retent:6,retri:4,rout:13,router:[7,9,12],rule_evalu:3,send:4,servic:[1,2,5,12,15,16],specif:6,start:8,statu:4,storag:8,support:6,tagslist:16,usag:14,user:16,version:3,webgui:[9,15],webinterfac:16,what:[6,9],why:6,written:6,you:6}})
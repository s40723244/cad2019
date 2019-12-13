var tipuesearch = {"pages": [{'title': 'week', 'text': 'week2-5 \n week6-9 \n week10-14 \n week15-18 \n', 'tags': '', 'url': 'week.html'}, {'title': 'week2-5', 'text': 'week2 \n week3 \n week4 \n week5 \n', 'tags': '', 'url': 'week2-5.html'}, {'title': 'week2', 'text': '本周目標:架設個人網站 \n \n 1.先至個人githubthub建立一個新的倉儲將其命名為 "cad2019" 並將下面的 \n lnitialize this repository with a README選項打勾以建立倉儲 \n 並且設定github page \n \n (建立倉儲) \n \n (選擇分頁) \n 2.下載\xa0 課程套件 \xa0並解壓縮放入隨身碟中 \n \n (下載可攜套件) \n \n (解壓縮) \n 3.將倉儲 git clone 下來(若在學校中需要設定proxy) \n \n (複製倉儲網址) \n \n (clone下來) \n \n (到home_mdecourse設定proxy) \n \n (開啟.gitcongif設定proxy=[2001:288:6004:17::17]:3128) \n 4.這學期近端有所變更需要使用 git submodule 將子模組下載下來 \n 其指令為 git submodule add https://github.com/mdecourse/cmsimde.git cmsimde \n \n (利用submodule載入子模組) \n 5.進入倉儲資料夾中打開 cmsimde --> up_dir 將檔案全選後複製到倉儲資料夾中 \n \n (打開倉儲資料夾中的cmsimde) \n \n (在開啟裡面的up_dir) \n \n (將檔案全選後copy並回到倉儲資料夾貼上) \n 6.在cmd視窗中切換至 cmsimdede 資料夾 輸入 python wsgi.py 開啟近端伺服器 \n (首次執行需額外再輸入 python -m pip install flask_cors下載套件) \n \n (下載 flask_cors 套件) \n \n (架設近端伺服器) \n 7.打開瀏覽器輸入 https://localhost:9443 (埠號為個人所設定 預設為9443)進行編輯 \n 且打開靜態網頁查看編輯結果 \n \n (動態近端網址) \n \n (更改動態近端內容後轉化為靜態近端) \n \n (靜態近端網址) \n \n (查看是否修改成功) \n 8.編輯完成後將檔案 git push 至雲端後 完成本周的目標 \n \n (將檔案push至github) \n', 'tags': '', 'url': 'week2.html'}, {'title': 'week3', 'text': '\n 本周目標:編譯Solvespace \n 1.先將\xa0Y:\\portablegit\\bin\\sh.exe\xa0改名為 sh_rename_for_solvespace.exe \n 2.利用利用 git version 檢查當前 git 版本 若是在2.13以上則可使用 git clone --recurse-submodules 取得所有子模組資料 \n git clone --recurse-submodules https://github.com/solvespace/solvespace.git solvespace \n 3.接下來到 Y:\\tmp\\solvespace\\extlib\\angle\\CMakeLists.txt 713&741行看是否為 \n #list(APPEND ANGLE_DEFINITIONS #"-DANGLE_PRELOADED_D3DCOMPILER_MODULE_NAMES={ \\"d3dcompiler_47.dll\\", \\"d3dcompiler_46.dll\\", \\"d3dcompiler_43.dll\\" }") endif() \n \n 4.回到 solvespace 目錄輸入 \n cd extlib -> cd libpng -> mkdir build ->\xa0cd build \n 利用 cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release 搜尋系統有哪些可用項目 \n 使用 mingw32-make 編譯出一個動態連結庫 \n 5.不過 libpng.dll.a 是靜態的要到 Y:\\tmp\\solvespace\\extlib\\libping\\build\xa0 \n 將他改名成 libpng_static.a 後將它複製 \n 到 Y:\\msys64\\mingw64\\lib 將它貼上 \n 6.然後回到 solvespace 目錄輸入 \n mkdir build ->\xa0cd build ->\xa0cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release\xa0 搜尋系統有哪些可用項目 \n 最後 mingw32-make 等待其編譯 \n 7.完成且成功後就可以啟動 solvespace開始學習繪製囉 \n', 'tags': '', 'url': 'week3.html'}, {'title': 'week4', 'text': '本周目標:將先前三周的進度趕上 \n 這個禮拜主要是將先前三周的進度趕上 \n 以便於後續的 \xa0solvespace作業進行 \n', 'tags': '', 'url': 'week4.html'}, {'title': 'week5', 'text': '\n 本周目標:學習solvespace繪製圖形 \n 1.先畫出一個正方形 2.選取任相鄰兩邊利用equal length/radius/angle(Q)使邊等長 3.再選取任一邊使用constrain distance(D)設定邊長45 4.利用extrude(shift+X)使其形成一個長方體 5.旋轉視角後再將其邊長等長形成一個正方體 6.選擇兩邊及一個頂點後按New Group > Sketch In New Workplone(Shift+w) 7.按F變成適當大小後用sketch circle(C)畫一個圓 8.點選圓周使用constrain distance(D)設定直徑25 9.用Sketch datum point(P)畫出兩個點 10.點選任一點與任一邊按(M)讓他置於線段中點 11.對另一點與相鄰的另一邊重複這個動作 12.點選圓心以及與圓心垂直的點按verticel(V)使其對準並鎖定 13.點選圓心以及與圓心平行的點按horizontal(H)使其對準並鎖定 14.利用extrude(shift+X)使其形成一個圓柱體 15.按F變成適當大小後使用constrain distance(D)設定厚度3 16.點選旁邊相鄰面的任兩邊線及點使用Sketch In New Workplone(Shift+w)轉向 17.重複畫圓、鎖定以及形成圓柱的動作 18.點擊Hide shaded view of solid model讓視圖更好找線 19.點選圓柱厚度線與上一條圓柱厚度線按equal length/radius/angle(Q)使邊等長 20.點選上面垂直面的任兩邊線及點使用Sketch In New Workplone(Shift+w)轉向 21.重複畫圓、鎖定、形成圓柱以及設定長度的動作 22.點選其中一個圓的圓心使用Sketch In New Workplone(Shift+w)轉向 23.再圓心重複畫圓、鎖定以及形成圓柱的動作形成一個直徑12的圓柱 24.再其他兩圓重複畫圓、鎖定以及形成圓柱的動作 25.將所有圓柱的長度設定為20 \n ------------------常用指令列表 ------------------ \n sketch rectangle (R) \n sketch line segment(S) \n sketch circle (C) \n constrain distance (D) \n constrain angle (N) \n nearest isometric view (F3) \n align view to workplane(W) \n equal length/radius/angle (Q) \n extrude (shift+X) \n sketh arc of a circle(A) \n sketh cubic bezier spline(B) \n two line perpencudilar ([) \n two line parallel (L) \n two line symmetry (Y) \n verticel (V) \n horizontal(H) \n same direction(X) \n split line(I) \n tangent arc(shift+A) \n benchmark(P) \n', 'tags': '', 'url': 'week5.html'}, {'title': 'week6-9', 'text': 'week6 \n \n 本周目標1:利用silvespacec繪製零件並組裝成車子 \n 1.打開Solvespace 2.畫一個長方體(20X30X5) 3.在長方體的兩側在畫出兩個長方體(3X30X10) 4.在長方體兩邊畫直徑2mm的圓 5.shift+x選擇difference除料20mm完成軸孔 6.開新檔案畫直徑15mm厚3mm的圓柱 7.在中心畫直徑2mm厚5mm的圓柱 8.打開本體將所有輪子組合上去 9.完成第一步 \n ------------------------------------------------------------------------------------------------------------- \n \n 本周目標2:利用V-rep模擬車子的運動情形 \n 1.到課程網站下載V-rep 3.6.1 rev 4.7z以及web_vrep2.zip 2.將檔案解壓縮放到隨身系統 3.打開V-rep開啟two_wheeler.ttt 4.將app.py執行開啟近端控制 5.預設埠號為5000且不用https 6.嘗試控制車輛 7.完成第二步 \n ------------------------------------------------------------------------------------------------------------- \n 本周目標3: 透過Python程式啟動或停止V-rep模擬 \n \n week7 \n 本周目標1:編譯solvespace將about中的資訊改成自己的學號 \n \n 1.打開我們的solvespace資料夾 2.進入bulid>src>CMakeFiles>solvespace 3.把solvespace.cpp.obj刪除 4.回到solvespace資料夾 5.進入src 6.用編輯器打開solvespace.cpp 7.找到about的地方 8.改成自己的學號 9.利用cmd進入build資料夾在認證一次(mingw32-make) 10.打開solvespace確認是否更改成功 11.第一步END \n ------------------------------------------------------------------------------------------------------------- \n 本周目標2:練習繪製solvespace認證之題目 \n \n 1.開始繪製題目(我選第一題) 2.沒有給尺寸所以大概畫個長方形 3.長出一個高度(我設20mm) 4.在長方體旁邊畫一個凹字形(尺寸訂個大概) 5.長出高度(比旁邊高就好) 6.畫一個三角形準備做倒角 7.利用除料完成倒角 8.在一開始的長方體上畫圓 9.除料完成通孔 10.第二步END \n \n week8 \n week9', 'tags': '', 'url': 'week6-9.html'}, {'title': 'week10-14', 'text': '', 'tags': '', 'url': 'week10-14.html'}, {'title': 'week10', 'text': '', 'tags': '', 'url': 'week10.html'}, {'title': 'week11', 'text': '', 'tags': '', 'url': 'week11.html'}, {'title': 'week12', 'text': '', 'tags': '', 'url': 'week12.html'}, {'title': 'week13', 'text': '', 'tags': '', 'url': 'week13.html'}, {'title': 'week14', 'text': '', 'tags': '', 'url': 'week14.html'}, {'title': 'week15-18', 'text': '', 'tags': '', 'url': 'week15-18.html'}, {'title': 'week15', 'text': '', 'tags': '', 'url': 'week15.html'}, {'title': 'week16', 'text': '', 'tags': '', 'url': 'week16.html'}, {'title': 'week17', 'text': '', 'tags': '', 'url': 'week17.html'}, {'title': 'week18', 'text': '', 'tags': '', 'url': 'week18.html'}, {'title': 'note', 'text': '', 'tags': '', 'url': 'note.html'}, {'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數.', 'tags': '', 'url': 'Develop.html'}]};
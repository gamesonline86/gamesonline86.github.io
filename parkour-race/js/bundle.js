!function() {
    "use strict";
    var e, t, i, a, n, s, l, o, r, h, d, c, m, p, u, g, _, y, L, f, S = Laya.ClassUtils.regClass;
    !function(e) {
        class t extends Laya.View {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(),
                this.loadScene("LoadingView")
            }
        }
        e.LoadingViewUI = t,
        S("ui.LoadingViewUI", t);
        class i extends Laya.View {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(),
                this.createView(i.uiView)
            }
        }
        i.uiView = {
            type: "View",
            props: {
                width: 750,
                top: 0,
                runtime: "Controller/SpecialNoticeView.ts",
                right: 0,
                left: 0,
                height: 1334,
                bottom: 0
            },
            compId: 2,
            child: [{
                type: "Box",
                props: {
                    visible: !0,
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                    bgColor: "#000000"
                },
                compId: 5,
                child: [{
                    type: "Box",
                    props: {
                        width: 438,
                        visible: !1,
                        var: "btn_ok",
                        height: 107,
                        centerY: 486,
                        centerX: 0
                    },
                    compId: 12
                }]
            }],
            loadList: [],
            loadList3D: []
        },
        e.SpecialNoticeUI = i,
        S("ui.SpecialNoticeUI", i);
        class a extends Laya.Scene {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(),
                this.createView(a.uiView)
            }
        }
        a.uiView = {
            type: "Scene",
            props: {
                width: 750,
                runtime: "Controller/TipUI.ts",
                height: 1334
            },
            compId: 2,
            child: [{
                type: "Box",
                props: {
                    width: 500,
                    var: "g_tips",
                    height: 60,
                    centerY: -50,
                    centerX: 0
                },
                compId: 7,
                child: [{
                    type: "Image",
                    props: {
                        width: 500,
                        skin: "ui/bandeau_stage.png",
                        height: 60,
                        centerY: 0,
                        centerX: 0
                    },
                    compId: 5
                }, {
                    type: "Label",
                    props: {
                        var: "text_tips",
                        valign: "middle",
                        strokeColor: "#050505",
                        stroke: 1,
                        fontSize: 38,
                        font: "SimHei",
                        color: "#ffffff",
                        centerY: 0,
                        centerX: 0,
                        bold: !0,
                        align: "center"
                    },
                    compId: 3
                }]
            }],
            loadList: ["ui/bandeau_stage.png"],
            loadList3D: []
        },
        e.TipsUI = a,
        S("ui.TipsUI", a)
    }(e || (e = {})),
    function(e) {
        e[e.Initing = 0] = "Initing",
        e[e.Waiting = 1] = "Waiting",
        e[e.WaitPlay = 2] = "WaitPlay",
        e[e.Playing = 3] = "Playing",
        e[e.GameOver = 4] = "GameOver",
        e[e.Shopint = 5] = "Shopint"
    }(t || (t = {})),
    function(e) {
        e[e.Menu = 0] = "Menu",
        e[e.Game = 1] = "Game",
        e[e.Setting = 2] = "Setting",
        e[e.Receive = 3] = "Receive",
        e[e.Skin = 4] = "Skin",
        e[e.VideoPop = 5] = "VideoPop",
        e[e.CollectPop = 6] = "CollectPop",
        e[e.Chest = 7] = "Chest",
        e[e.LevelList = 8] = "LevelList",
        e[e.NativeAds = 9] = "NativeAds",
        e[e.SmallNativeAds = 10] = "SmallNativeAds"
    }(i || (i = {})),
    function(e) {
        e[e.Fat = 2] = "Fat",
        e[e.Man = 1] = "Man",
        e[e.Muscle = 3] = "Muscle",
        e[e.Thin = 4] = "Thin"
    }(a || (a = {})),
    function(e) {
        e.run = "run",
        e.F_run = "action_03",
        e.Idle = "Idle",
        e.jump = "jump",
        e.jump2 = "jump2",
        e.falling = "falling",
        e.clim = "clim",
        e.cheng = "cheng",
        e.flip = "flip",
        e.jump_cheng = "jump_cheng",
        e.jump_cheng2 = "jump_cheng2",
        e.onWallRight = "onWallRight",
        e.onWallLeft = "onWallLeft",
        e.slide = "slide",
        e.fallToRun = "fallToRun",
        e.fallToLand = "fallToLand",
        e.roll = "roll",
        e.Dance1 = "Dance1",
        e.dance1 = "action_cheer_01",
        e.dance2 = "action_cheer_02"
    }(n || (n = {})),
    function(e) {
        e[e.Left = 0] = "Left",
        e[e.Right = 1] = "Right",
        e[e.Up = 2] = "Up",
        e[e.Down = 3] = "Down",
        e[e.Middle = 4] = "Middle"
    }(s || (s = {})),
    function(e) {
        e[e.Line = 0] = "Line",
        e[e.Arc = 1] = "Arc",
        e[e.LineStop = 2] = "LineStop"
    }(l || (l = {})),
    function(e) {
        e.richang = "res/Sound/dailyrace_bgm.mp3",
        e.putong = "res/Sound/ordinary_bgm.mp3",
        e.spead = "res/Sound/speed_up.mp3"
    }(o || (o = {})),
    function(e) {
        e[e.Coin10 = 0] = "Coin10",
        e[e.Coin15 = 1] = "Coin15",
        e[e.Coin20 = 2] = "Coin20",
        e[e.Ball = 3] = "Ball"
    }(r || (r = {})),
    function(e) {
        e[e.shortVibration = 10] = "shortVibration",
        e[e.longVibration = 300] = "longVibration"
    }(h || (h = {})),
    function(e) {
        e[e.WeiXin = 0] = "WeiXin",
        e[e.QQ = 1] = "QQ",
        e[e.OPPO = 2] = "OPPO",
        e[e.VIVO = 3] = "VIVO"
    }(d || (d = {})),
    function(e) {
        e[e.Skip = 0] = "Skip",
        e[e.GetTimesCoin = 1] = "GetTimesCoin",
        e[e.GetSkinCoin = 2] = "GetSkinCoin",
        e[e.GetKey = 3] = "GetKey",
        e[e.Hint = 4] = "Hint"
    }(c || (c = {})),
    function(e) {
        e[e.Skin = 0] = "Skin",
        e[e.Receive = 1] = "Receive",
        e[e.LevelList = 2] = "LevelList",
        e[e.Menu = 3] = "Menu",
        e[e.Game = 4] = "Game"
    }(m || (m = {})),
    function(e) {
        e.atlas0 = "res/fgui/Runman_atlas0.png",
        e.atlas1 = "res/fgui/Runman_atlas0_1.png",
        e.txt = "res/fgui/Runman.txt",
        e.Package = "res/fgui/Runman",
        e.atlas01 = "res/fgui/Bag_atlas0.png",
        e.txt1 = "res/fgui/Bag.fui",
        e.Package1 = "res/fgui/Bag",
        e.notice = "res/SpecialNotice/ui_tbtg.png"
    }(p || (p = {})),
    function(e) {
        e.Panel_MainMenu = "Panel_MainMenu",
        e.Panel_Matching = "Panel_Matching",
        e.Panel_Countdown = "Panel_Countdown",
        e.Panel_Gameplay = "Panel_Gameplay",
        e.Panel_Settlement = "Panel_Settlement",
        e.Panel_Store = "Panel_Store",
        e.Panel_End_mode1 = "Panel_End_mode1",
        e.Panel_End_mode2 = "Panel_End_mode2",
        e.Panel_Juhe = "Panel_Juhe",
        e.Panel_sdk = "Panel_sdk",
        e.Panel_Kaiping = "Panel_Kaiping",
        e.Panel_WXchaping = "Panel_WXchaping",
        e.Panel_duihuan = "Panel_duihuan",
        e.Panel_zhanshi = "Panel_zhanshi",
        e.Panel_Mask = "Panel_Mask",
        e.Panel_WuDian = "Panel_WuDian",
        e.Panel_Tips = "Panel_Tips"
    }(u || (u = {})),
    function(e) {
        e[e.EnemyLeft = 0] = "EnemyLeft",
        e[e.EnemyRight = 1] = "EnemyRight",
        e[e.EnemyUi = 2] = "EnemyUi"
    }(g || (g = {})),
    function(e) {
        e[e.StoreType = 2] = "StoreType",
        e[e.StoreIndex = 0] = "StoreIndex",
        e[e.DanceIndex = 1] = "DanceIndex"
    }(_ || (_ = {})),
    function(e) {
        e[e.Gold = 0] = "Gold",
        e[e.level = 1] = "level",
        e[e.video = 2] = "video",
        e[e.Invitation = 3] = "Invitation"
    }(y || (y = {})),
    function(e) {
        e.boxAd = "boxAd",
        e.banner = "banner",
        e.none = ""
    }(L || (L = {}));
    class w {
        static setItem(e, t) {
            try {
                Laya.LocalStorage.setItem(e, t)
            } catch (e) {
                console.error(e)
            }
        }
        static getItem(e) {
            try {
                return Laya.LocalStorage.getItem(e)
            } catch (e) {
                return console.error(e),
                null
            }
        }
    }
    class C extends Laya.Script {
        constructor() {
            super(),
            this.playRollRate = 1,
            this.isPlayingRoll = !1,
            this.circleNum = 2,
            this.m_musicNow = null
        }
        onAwake() {
            C.instance = this,
            window.addEventListener("focus", this.verifyIfShouldPlay.bind(this))
        }
        verifyIfShouldPlay() {
            null !== this.m_musicNow && 0 === Laya.SoundManager._channels.length && this.playBgMusic(this.m_musicNow)
        }
        playBgMusic(e) {
            this.isSound && (Laya.loader.getRes(e) ? (Laya.SoundManager.stopAll(),
            this.m_musicNow = e,
            Laya.SoundManager.playMusic(e, 0)) : Laya.loader.load(e, Laya.Handler.create(this, () => {
                this.playBgMusic(e)
            }
            )))
        }
        stopBgMusic() {
            Laya.SoundManager.stopMusic()
        }
        playSound(e, t=1) {}
        stopSound(e) {
            this.isSound && Laya.SoundManager.stopSound(e),
            this.m_musicNow = null
        }
        stopAll() {
            Laya.SoundManager.stopSound(o.putong),
            Laya.SoundManager.stopSound(o.richang)
        }
        vibration(e) {
            if (this.isShake)
                if (null != window.navigator && null != window.navigator.vibrate) {
                    window.navigator.vibrate([15, 60, 15])
                } else
                    "undefined" != typeof wx ? (Laya.Browser.onIOS,
                    wx.vibrateShort({
                        success: function() {},
                        fail: function() {},
                        complete: function() {}
                    })) : Laya.Browser.window.qg ? Laya.Browser.onVVMiniGame ? Laya.Browser.window.qg.vibrateShort() : Laya.Browser.window.qg.vibrateShort({
                        success: function(e) {},
                        fail: function(e) {},
                        complete: function(e) {}
                    }) : Laya.Browser.window.qq ? Laya.Browser.window.qq.vibrateShort({
                        success: function(e) {},
                        fail: function(e) {},
                        complete: function(e) {}
                    }) : Laya.Browser.window.tt && Laya.Browser.window.tt.vibrateShort({
                        success: function(e) {},
                        fail: function(e) {}
                    })
        }
        set isSound(e) {
            e ? w.setItem("isSound", "1") : w.setItem("isSound", "0")
        }
        get isSound() {
            let e = w.getItem("isSound");
            return null == e || "" == e || "1" == e
        }
        set isShake(e) {
            e ? w.setItem("isShake", "1") : w.setItem("isShake", "0")
        }
        get isShake() {
            let e = w.getItem("isShake");
            return null == e || "" == e || "1" == e
        }
    }
    class v extends Laya.Script {
        constructor() {
            super(),
            this._view = null
        }
        InitUi() {
            this._view.visible = !0
        }
        CloseUi() {
            this._view.visible = !1
        }
        DestroyUi() {
            fgui.GRoot.inst.removeChild(this._view)
        }
    }
    class I extends v {
    }
    class b extends v {
        constructor() {
            super(),
            this._view = fgui.UIPackage.createObject("Runman", "Countdown").asCom,
            this._view.setSize(fgui.GRoot.inst.width, fgui.GRoot.inst.height),
            this.Countdown = this._view.getTransition("Countdown"),
            fgui.GRoot.inst.addChild(this._view)
        }
        InitUi() {
            this._view.visible = !0,
            this.Countdown.play(),
            Laya.timer.once(4e3, this, () => {
                Le.instance().CloseUi(u.Panel_Countdown),
                Le.instance().OpenUi(u.Panel_Gameplay)
            }
            )
        }
    }
    class k extends v {
        constructor() {
            super(),
            this._view = fgui.UIPackage.createObject("Runman", "Gameplay").asCom,
            this._view.setSize(fgui.GRoot.inst.width, fgui.GRoot.inst.height),
            this._Gameplay_tips = this._view.getChild("Gameplay_tips").asCom;
            let e = this._view.getChild("Level_Bar").asCom;
            e.visible = !1,
            this._player = e.getChild("n4").asLabel,
            fgui.GRoot.inst.addChild(this._view)
        }
        InitUi() {
            this._view.visible = !0,
            this._player.x = 0,
            we.instance.startPlayerGame()
        }
        CloseTips() {
            this._Gameplay_tips.visible = !1
        }
        updataPlayerBar(e, t) {
            let i = e / t * 486;
            Laya.Tween.to(this._player, {
                x: i
            }, 800, null, null, 0, !0)
        }
        updataLeftPlayerBar(e, t) {}
        updataRightPlayerBar(e, t) {}
    }
    class x extends v {
        constructor() {
            super(),
            this._view = fgui.UIPackage.createObject("Runman", "Settlement").asCom,
            this._view.setSize(fgui.GRoot.inst.width, fgui.GRoot.inst.height),
            this._btn_complete = this._view.getChild("n10").asButton,
            this._btn_Restart = this._view.getChild("n16").asButton,
            this._btn_ok = this._view.getChild("n5").asButton,
            this.levelBar1 = this._view.getChild("n3").asCom,
            this._text_level = this.levelBar1.getChild("text_level").asLabel,
            this._text_nextlevel = this.levelBar1.getChild("text_nextlevel").asLabel,
            this.levelBar2 = this._view.getChild("n4").asCom,
            this._text_level2 = this.levelBar2.getChild("text_level").asLabel,
            this._text_nextlevel2 = this.levelBar2.getChild("text_nextlevel").asLabel,
            this._LevelBar2 = this.levelBar2.getChild("LevelBar2").asCom,
            this._btn_complete.onClick(this, this.My_complete),
            this._btn_ok.onClick(this, this.My_complete),
            this._btn_Restart.onClick(this, this.My_complete),
            this._text_p = this._view.getChild("n14").asCom,
            this._text_GetUse = this._text_p.getChild("n2").asLabel,
            this._Rankint = this._view.getChild("n2").asCom,
            this._Rank1 = this._Rankint.getChild("1").asCom,
            this._Rank1.controllers[0].setSelectedIndex(0),
            this._Rank2 = this._Rankint.getChild("2").asCom,
            this._Rank2.controllers[0].setSelectedIndex(1),
            this._Rank3 = this._Rankint.getChild("3").asCom,
            this._Rank3.controllers[0].setSelectedIndex(2),
            this._Rank1.getChild("n7").visible = !1,
            this._Rank2.getChild("n7").visible = !1,
            fgui.GRoot.inst.addChild(this._view)
        }
        InitUi() {}
        My_complete() {
            Le.instance().CloseUi(u.Panel_Settlement),
            we.instance.LevelEnd()
        }
    }
    class P {
    }
    class D extends Laya.Vector3 {
        constructor(e, t, i) {
            super(e, t, i)
        }
        add(e) {
            let t = new D(e.x,e.y,e.z);
            return Laya.Vector3.add(this, t, t),
            t
        }
        subtract(e) {
            let t = new D(e.x,e.y,e.z);
            return Laya.Vector3.subtract(this, t, t),
            t
        }
        get length() {
            return Laya.Vector3.scalarLength(this)
        }
        multiply(e) {
            if ("number" == typeof e) {
                return new D(this.x * e,this.y * e,this.z * e)
            }
            {
                let t = new D(e.x,e.y,e.z);
                return Laya.Vector3.multiply(this, t, t),
                t
            }
        }
        Cross(e) {
            let t = new D(e.x,e.y,e.z);
            return Laya.Vector3.cross(this, t, t),
            t
        }
        normalize() {
            let e = new D(1,1,1);
            return Laya.Vector3.normalize(this, e),
            e
        }
        lerp(e, t) {
            let i = new D(1,1,1);
            return Laya.Vector3.lerp(this, e, t, i),
            i
        }
        equals(e) {
            return this.x == e.x && this.y == e.y && this.z == e.z
        }
        transformQuat(e) {
            let t = new D(1,1,1);
            return Laya.Vector3.transformQuat(this, e, t),
            t
        }
        createQueternionByVector() {
            let e = new Laya.Quaternion(0,0,0,0);
            return Laya.Quaternion.createFromYawPitchRoll(this.y * Math.PI / 180, this.x * Math.PI / 180, this.z * Math.PI / 180, e),
            e
        }
    }
    class T extends Laya.Script3D {
        constructor() {
            super(...arguments),
            this.CameraDic = {}
        }
        onAwake() {
            T.instance = this,
            this.gameObject = this.owner,
            this.transform = this.gameObject.transform,
            this.CameraDic = {}
        }
        CameraPlayerAni(e) {
            if (null == this.CameraDic[0])
                return;
            let t = this.CameraDic[0];
            null != t.animator && t.animator.play(e)
        }
        CloseCamera() {
            for (let e in this.CameraDic) {
                let t = this.CameraDic[e];
                null != t && "101" != e && (t.Camera && (t.Camera.active = !1),
                t.playerSprite3D && (t.playerSprite3D.active = !1))
            }
        }
        isLoadUiPlayer() {
            if (null == this.CameraDic[0])
                return !0;
            for (let e in this.CameraDic) {
                let t = this.CameraDic[e];
                if (null != t && 0 == t.isLoad)
                    return !1
            }
            return !0
        }
        GetOrInitCamera(e, t, i, a, n=0) {
            if (null == this.CameraDic[e]) {
                let n, s = new P;
                s.ID = e,
                s.PlayerName = t,
                s.holder = i,
                s.isLoad = !1,
                (n = 0 == e ? Ie.UiScene.addChild(new Laya.Camera(0,.3,1e3)) : 200 == e ? Ie.UiSubScene1.addChild(new Laya.Camera(0,.3,1e3)) : 201 == e ? Ie.UiSubScene1.addChild(new Laya.Camera(0,.3,1e3)) : 202 == e ? Ie.UiSubScene2.addChild(new Laya.Camera(0,.3,1e3)) : Ie.UiSubScene.addChild(new Laya.Camera(0,.3,1e3))).transform.position = new D(1e3 + 10 * e,.25,.47),
                n.transform.rotate(new D(0,0,0), !0, !1),
                n.renderTarget = new Laya.RenderTexture(s.holder.width,s.holder.height,Laya.RenderTexture2D.FORMAT_R8G8B8A8),
                n.renderingOrder = -1,
                n.clearFlag = Laya.CameraClearFlags.SolidColor,
                n.clearColor = new Laya.Vector4(0,0,0,0);
                let l = new Laya.Texture(n.renderTarget,Laya.Texture.DEF_UV)
                  , o = new Laya.Sprite;
                o.graphics.drawTexture(l),
                s.Camera = n,
                s.sp = o,
                this.CameraDic[e] = s;
                let r = Laya.loader.getRes(Ie.URL + "res/LayaScene_ObjScene/Conventional/" + s.PlayerName + ".lh");
                if (null == r)
                    Laya.Sprite3D.load(Ie.URL + "res/LayaScene_ObjScene/Conventional/" + s.PlayerName + ".lh", Laya.Handler.create(this, function(t) {
                        t.transform.position = new D(0,0,0 == e && 2 != a ? -.4 : 0 == e && 2 == a ? 0 : -.2),
                        t.getChildAt(0).active = !1;
                        let i, n = new Laya.Sprite3D;
                        n.addChild(t),
                        i = 0 == e ? Ie.UiScene : 200 == e ? Ie.UiSubScene1 : 201 == e ? Ie.UiSubScene1 : 202 == e ? Ie.UiSubScene2 : Ie.UiSubScene;
                        let l = Laya.Sprite3D.instantiate(n, i, !1, new Laya.Vector3(1e3 + 10 * e,0,0));
                        this.CameraDic[e].playerSprite3D = l,
                        101 == e && (l.transform.localPositionZ = -.25,
                        l.transform.localRotationEulerY = 180),
                        s.holder.setNativeObject(s.sp);
                        let o = l.getChildByName(s.PlayerName)
                          , r = o.getComponent(Laya.Animator);
                        if (o.active = !0,
                        0 == e)
                            r.play("dance"),
                            T.instance.UpdatePlayerStoreType(s.PlayerName, Ie.SkinType, e),
                            T.instance.updateDanceIndex(Ie.DanceIndex, e, Ie.SkinIndex);
                        else if (101 == e) {
                            r.play("run");
                            let t = ve.SkinType
                              , i = ve.DanceIndex;
                            T.instance.UpdatePlayerStoreType(s.PlayerName, t, e),
                            T.instance.updateDanceIndex(i, e, ve.SkinIndex)
                        } else
                            r.play("Idle");
                        this.CameraDic[e].isLoad = !0,
                        this.CameraDic[e].animator = r
                    }));
                else {
                    r.transform.position = new D(0,0,0 == e && 2 != a ? -.4 : 0 == e && 2 == a ? 0 : -.2),
                    r.getChildAt(0).active = !1;
                    let t, i = new Laya.Sprite3D;
                    i.addChild(r),
                    t = 0 == e ? Ie.UiScene : 200 == e ? Ie.UiSubScene1 : 201 == e ? Ie.UiSubScene1 : 202 == e ? Ie.UiSubScene2 : Ie.UiSubScene;
                    let n = Laya.Sprite3D.instantiate(i, t, !1, new Laya.Vector3(1e3 + 10 * e,0,0));
                    this.CameraDic[e].playerSprite3D = n,
                    101 == e && (n.transform.localPositionZ = -.25,
                    n.transform.localRotationEulerY = 180),
                    s.holder.setNativeObject(s.sp);
                    let l = n.getChildByName(s.PlayerName)
                      , o = l.getComponent(Laya.Animator);
                    if (l.active = !0,
                    0 == e)
                        o.play("dance"),
                        T.instance.UpdatePlayerStoreType(s.PlayerName, Ie.SkinType, e),
                        T.instance.updateDanceIndex(Ie.DanceIndex, e, Ie.SkinIndex);
                    else if (101 == e) {
                        o.play("run");
                        let t = ve.SkinType
                          , i = ve.DanceIndex;
                        T.instance.UpdatePlayerStoreType(s.PlayerName, t, e),
                        T.instance.updateDanceIndex(i, e, ve.SkinIndex)
                    } else
                        o.play("Idle");
                    this.CameraDic[e].isLoad = !0,
                    this.CameraDic[e].animator = o
                }
            } else {
                let s = this.CameraDic[e];
                if (0 == s.isLoad)
                    return;
                if (null == s.playerSprite3D)
                    return;
                if (s.PlayerName == t) {
                    for (let e = 0; e < s.playerSprite3D.numChildren; ++e)
                        s.playerSprite3D.getChildAt(e).name == t ? (s.playerSprite3D.getChildAt(e).active = !0,
                        this.updateDanceIndex(Ie.DanceIndex, 0, n)) : s.playerSprite3D.getChildAt(e).active = !1;
                    s.Camera.active = !0,
                    s.playerSprite3D.active = !0,
                    s.sp.active = !0,
                    s.holder = i,
                    s.holder.setNativeObject(s.sp),
                    0 == s.ID ? s.animator.play("dance") : 101 == s.ID ? s.animator.play("run") : (200 == e && 1 == n && (s.playerSprite3D.getChildAt(0).transform.localPosition = new D(-.08,0,-.2)),
                    s.animator.play("Idle"))
                } else {
                    for (let e = 0; e < s.playerSprite3D.numChildren; ++e)
                        s.playerSprite3D.getChildAt(e).active = !1;
                    s.Camera.active = !0,
                    s.playerSprite3D.active = !0,
                    s.sp.active = !0,
                    s.holder = i,
                    s.holder.setNativeObject(s.sp),
                    s.PlayerName = t;
                    let l = s.playerSprite3D.getChildByName(s.PlayerName);
                    if (null != l) {
                        l.active = !0;
                        let t = l.getComponent(Laya.Animator);
                        if (s.animator = t,
                        0 == e)
                            t.play("dance");
                        else if (101 == e) {
                            t.play("run");
                            let i = ve.SkinType
                              , a = ve.DanceIndex;
                            T.instance.UpdatePlayerStoreType(s.PlayerName, i, e),
                            T.instance.updateDanceIndex(a, e, ve.SkinIndex)
                        } else
                            t.play("Idle");
                        this.updateDanceIndex(Ie.DanceIndex, 0, n),
                        T.instance.UpdatePlayerStoreType(s.PlayerName, Ie.SkinType, 0)
                    } else
                        Laya.Sprite3D.load(Ie.URL + "res/LayaScene_ObjScene/Conventional/" + s.PlayerName + ".lh", Laya.Handler.create(this, function(t) {
                            for (let e = 0; e < s.playerSprite3D.numChildren; ++e)
                                s.playerSprite3D.getChildAt(e).active = !1;
                            let i, l;
                            i = 0 == e && 2 != a ? new D(0,0,-.4) : 0 == e && 2 == a ? new D(0,0,0) : 200 == e ? new D(-.08,0,-.2) : 201 == e ? new D(-.08,0,-.2) : new D(202 == e ? -.08 : 0,0,-.1),
                            t.active = !0,
                            l = 0 == e ? Ie.UiScene : 200 == e ? Ie.UiSubScene1 : 201 == e ? Ie.UiSubScene1 : 202 == e ? Ie.UiSubScene2 : Ie.UiSubScene;
                            let o = Laya.Sprite3D.instantiate(t, l, !1, new Laya.Vector3(i.x,i.y,i.z));
                            s.playerSprite3D.addChild(o),
                            o.active = !0;
                            let r = o.getComponent(Laya.Animator);
                            if (s.animator = r,
                            0 == e)
                                r.play("dance");
                            else if (101 == e) {
                                r.play("run");
                                let t = ve.SkinType
                                  , i = ve.DanceIndex;
                                T.instance.UpdatePlayerStoreType(s.PlayerName, t, e),
                                T.instance.updateDanceIndex(i, e, t)
                            } else
                                r.play("Idle");
                            this.updateDanceIndex(Ie.DanceIndex, 0, n),
                            T.instance.UpdatePlayerStoreType(s.PlayerName, Ie.SkinType, 0)
                        }))
                }
            }
        }
        UpdatePlayerStoreType(e, t, i) {
            null != this.CameraDic[i] && Laya.Texture2D.load(Ie.URL + "res/texture/tag_" + t + ".png", Laya.Handler.create(this, function(e) {
                let t = this.CameraDic[i]
                  , a = t.playerSprite3D.getChildByName(t.PlayerName);
                if (null != a) {
                    let i = a.getChildAt(1).getChildAt(0);
                    if ("Player46" == t.PlayerName || "Player51" == t.PlayerName || "Player49" == t.PlayerName || "Player54" == t.PlayerName || "Player56" == t.PlayerName) {
                        let t = a.getChildAt(1).getChildAt(1).getChildAt(2).getChildAt(0).getChildAt(0);
                        t.meshRenderer.materials[t.meshRenderer.materials.length - 1].albedoTexture = e
                    } else {
                        let t = i.skinnedMeshRenderer.materials[i.skinnedMeshRenderer.materials.length - 1];
                        if ("Tag(Instance)" != t.name)
                            for (var n = 0; n < i.skinnedMeshRenderer.materials.length; n++) {
                                var s = i.skinnedMeshRenderer.materials[n];
                                if ("Tag(Instance)" == s.name) {
                                    t = s;
                                    break
                                }
                            }
                        t.albedoTexture = e
                    }
                }
            }))
        }
        updateDanceIndex(e, t, i) {
            if (null == this.CameraDic[t])
                return;
            let a = this.CameraDic[t]
              , n = a.playerSprite3D.getChildByName(a.PlayerName);
            if (null == n)
                return;
            let s = this.findChild(n, "mixamorig:LeftHand")
              , l = this.findChild(n, "mixamorig:RightHand");
            for (let e = 0; e < s.numChildren; ++e) {
                let t = s.getChildAt(e).name.split("_");
                2 == t.length && "taril" == t[0] && (s.getChildAt(e).active = !1)
            }
            for (let e = 0; e < l.numChildren; ++e) {
                let t = l.getChildAt(e).name.split("_");
                2 == t.length && "taril" == t[0] && (l.getChildAt(e).active = !1)
            }
            let o = "taril_" + e
              , r = s.getChildByName(o);
            if (null != r) {
                r.active = !0,
                i && (r.transform.localScale = 47 == i || 49 == i || 52 == i || 54 == i ? new D(.04,.04,.04) : i >= 39 ? new D(.1,.1,.1) : new D(.2,.2,.2));
                let e = l.getChildByName(o);
                e.transform.localScale = 47 == i || 49 == i || 52 == i || 54 == i ? new D(.04,.04,.04) : i >= 39 ? new D(.1,.1,.1) : new D(.2,.2,.2),
                e.active = !0
            } else
                Laya.Sprite3D.load(Ie.URL + "res/LayaScene_ObjScene/Conventional/" + o + ".lh", Laya.Handler.create(this, function(e) {
                    let t = e.clone();
                    t.transform.localPosition = new D(0,0,0),
                    t.transform.localScale = 47 == i || 49 == i || 52 == i || 54 == i ? new D(.04,.04,.04) : i >= 39 ? new D(.1,.1,.1) : new D(.2,.2,.2);
                    let a = t.getChildByName("TrailSprite");
                    null != a && null != a.trailFilter && (a.trailFilter.time *= 2),
                    s.addChild(t);
                    let n = e.clone();
                    n.transform.localPosition = new D(0,0,0),
                    n.transform.localScale = 47 == i || 49 == i || 52 == i || 54 == i ? new D(.04,.04,.04) : i >= 39 ? new D(.1,.1,.1) : new D(.2,.2,.2);
                    let o = n.getChildByName("TrailSprite");
                    null != o && null != o.trailFilter && (o.trailFilter.time *= 2),
                    l.addChild(n),
                    e.active = !0
                }))
        }
        findChild(e, t) {
            return e.name == t ? e : this._findChild(e._children, t)
        }
        _findChild(e, t) {
            for (var i = [], a = 0; a < e.length; a++) {
                var n = e[a];
                if (n.name == t)
                    return n;
                n.numChildren && (i = i.concat(n._children))
            }
            return i.length ? this._findChild(i, t) : null
        }
    }
    class R {
        constructor(e, t, i, a, n, s, l, o, r, h, d, c, m, p, u) {
            this.Level = e,
            this.LevelName = t,
            this.PlayerCount = i,
            this.Length = a,
            this.minLevel = n,
            this.maxLevel = s,
            this.minPlayerLevel = l,
            this.maxPlayerLevel = o,
            this.LevelData = r,
            this.StageAngle = h,
            this.CameraSpeed = d,
            this.BgColor = p,
            this.StageEndAngle = c,
            this.AiDataId = m,
            this.PosString = u
        }
    }
    class U {
        constructor(e, t, i, a, n, s, l) {
            this.RoadID = e,
            this.Level = t,
            this.Combie = i,
            this.RoadRes = a,
            this.Height = n,
            this.Angle = s,
            this.Distance = l
        }
    }
    class B {
        constructor(e, t, i, a, n, s, l) {
            this.ID = e,
            this.Level = t,
            this.StartDelay = i,
            this.WaitProb = a,
            this.WaitTime = n,
            this.IgnoreProb = s,
            this.FailedIgnoreProb = l
        }
    }
    class A {
        constructor(e, t, i, a, n, s, l) {
            this.ID = e,
            this.unlockShopType = this.isUnlockShopType(t),
            this.UseVar = i,
            this.unlockShopTypeSub = this.isUnlockShopType(a),
            this.UseVarSub = n,
            this.IconUrl = s,
            this.lockType = l
        }
        isUnlockShopType(e) {
            switch (e) {
            case "0":
                return y.Gold;
            case "1":
                return y.level;
            case "2":
                return y.video;
            case "3":
                return y.Invitation;
            default:
                return y.Gold
            }
        }
    }
    class G {
        constructor(e) {
            this.name = e
        }
    }
    class M extends Laya.Script {
        static loadGameData() {
            this.LoadData()
        }
        static LoadData() {
            {
                let e = Laya.loader.getRes("res/subpackage/GameData/RoadData.json");
                for (let t = 0; t < e.RoadDataList.length; t++) {
                    let i = new U(e.RoadDataList[t].RoadID,e.RoadDataList[t].Level,e.RoadDataList[t].Combie,e.RoadDataList[t].RoadRes,e.RoadDataList[t].Height,e.RoadDataList[t].Angle,e.RoadDataList[t].Distance);
                    this.RoadDataDic[i.RoadID] = i
                }
            }
            {
                let e = Laya.loader.getRes("res/subpackage/GameData/AIData.json");
                for (let t = 0; t < e.AIDataList.length; t++) {
                    let i = new B(e.AIDataList[t].ID,e.AIDataList[t].Level,e.AIDataList[t].StartDelay,e.AIDataList[t].WaitProb,e.AIDataList[t].WaitTime,e.AIDataList[t].IgnoreProb,e.AIDataList[t].FailedIgnoreProb);
                    this.AIDataDic[i.ID] = i
                }
            }
            {
                let e = Laya.loader.getRes("res/subpackage/GameData/LevelData.json");
                this.LevelDataList.splice(0, this.LevelDataList.length);
                for (let t = 0; t < e.LevelDataList.length; t++) {
                    let i = new R(e.LevelDataList[t].Level,e.LevelDataList[t].LevelName,e.LevelDataList[t].PlayerCount,e.LevelDataList[t].Length,e.LevelDataList[t].minLevel,e.LevelDataList[t].maxLevel,e.LevelDataList[t].minPlayerLevel,e.LevelDataList[t].maxPlayerLevel,e.LevelDataList[t].LevelData,e.LevelDataList[t].StageAngle,e.LevelDataList[t].CameraSpeed,e.LevelDataList[t].StageEndAngle,e.LevelDataList[t].AiDataId,e.LevelDataList[t].BgColor,e.LevelDataList[t].PosString);
                    this.LevelDataList.push(i)
                }
            }
            {
                let e = Laya.loader.getRes("res/subpackage/GameData/ShopTypeData.json")
                  , t = {};
                for (let i = 0; i < e.ShopDataList.length; i++) {
                    let a = new A(e.ShopDataList[i].ID,e.ShopDataList[i].unlockShopType,e.ShopDataList[i].UseVar,e.ShopDataList[i].unlockShopTypeSub,e.ShopDataList[i].UseVarSub,e.ShopDataList[i].IconUrl,e.ShopDataList[i].lockType);
                    t[i] = a
                }
                this.shopDataDic[_.StoreType] = t
            }
            {
                let e = Laya.loader.getRes("res/subpackage/GameData/ShopIndexData.json")
                  , t = {};
                for (let i = 0; i < e.ShopDataList.length; i++) {
                    let a = new A(e.ShopDataList[i].ID,e.ShopDataList[i].unlockShopType,e.ShopDataList[i].UseVar,e.ShopDataList[i].unlockShopTypeSub,e.ShopDataList[i].UseVarSub,e.ShopDataList[i].IconUrl,e.ShopDataList[i].lockType);
                    t[i] = a
                }
                this.shopDataDic[_.StoreIndex] = t
            }
            {
                let e = Laya.loader.getRes("res/subpackage/GameData/ShopDanceData.json")
                  , t = {};
                for (let i = 0; i < e.ShopDataList.length; i++) {
                    let a = new A(e.ShopDataList[i].ID,e.ShopDataList[i].unlockShopType,e.ShopDataList[i].UseVar,e.ShopDataList[i].unlockShopTypeSub,e.ShopDataList[i].UseVarSub,e.ShopDataList[i].IconUrl,e.ShopDataList[i].lockType);
                    t[i] = a
                }
                this.shopDataDic[_.DanceIndex] = t
            }
            {
                let e = Laya.loader.getRes("res/subpackage/GameData/NameData.json");
                for (let t = 0; t < e.namelist.length; t++) {
                    let i = new G(e.namelist[t].name);
                    this.nameDataList.push(i)
                }
            }
        }
        static step1_onRoadDataLoaded(e) {
            Laya.loader.load("res/subpackage/GameData/AIData.json", Laya.Handler.create(this, this.step2_onAIDataLoaded), null, Laya.Loader.JSON)
        }
        static step2_onAIDataLoaded(e) {
            Laya.loader.load("res/subpackage/GameData/LevelData.json", Laya.Handler.create(this, this.step3_onLevelDataLoaded), null, Laya.Loader.JSON)
        }
        static step3_onLevelDataLoaded(e) {
            Laya.loader.load("res/subpackage/GameData/ShopTypeData.json", Laya.Handler.create(this, this.step4_onLevelDataLoaded), null, Laya.Loader.JSON)
        }
        static step4_onLevelDataLoaded(e) {
            Laya.loader.load("res/subpackage/GameData/ShopIndexData.json", Laya.Handler.create(this, this.step5_onLevelDataLoaded), null, Laya.Loader.JSON)
        }
        static step5_onLevelDataLoaded(e) {
            Laya.loader.load("res/subpackage/GameData/ShopDanceData.json", Laya.Handler.create(this, this.step6_onLevelDataLoaded), null, Laya.Loader.JSON)
        }
        static step6_onLevelDataLoaded(e) {
            Laya.loader.load("res/subpackage/GameData/NameData.json", Laya.Handler.create(this, this.step7_onLevelDataLoaded), null, Laya.Loader.JSON)
        }
        static step7_onLevelDataLoaded(e) {}
    }
    M.RoadDataDic = {},
    M.LevelDataList = [],
    M.AIDataDic = {},
    M.shopDataDic = {},
    M.nameDataList = [];
    class E extends Laya.Script {
        static getPool(e) {
            if (null != this.poolDic[e] && this.poolDic[e].length > 0) {
                let t = this.poolDic[e].shift();
                return t.active = !0,
                t
            }
            {
                let t = Laya.Sprite3D.instantiate(this.prefabDic[e]);
                return t.active = !0,
                t
            }
        }
        static setPool(e, t) {
            t.active = !1,
            t.parent.removeChild(t),
            null == this.poolDic[e] && (this.poolDic[e] = []),
            this.poolDic[e].push(t)
        }
    }
    E.prefabDic = {},
    E.poolDic = {};
    class O extends Laya.Script3D {
        constructor() {
            super(...arguments),
            this.cameraSizeDic = {},
            this.vectorUp = new D(0,3,0),
            this.backDistance = 2,
            this.rightDistance = -2,
            this.m_rotspeed = 1.6,
            this._PositionTarget = new D(0,0,0),
            this.m_distance = 2,
            this.m_endRot = new D(-10,180,0)
        }
        onAwake() {
            O.instance = this,
            this.gameObject = this.owner,
            this.camera = this.gameObject,
            this.transform = this.gameObject.transform
        }
        onKeyDown(e) {
            var t = e.keyCode;
            87 == t ? this.gameObject.transform.localPositionZ += 1 : 83 == t ? this.gameObject.transform.localPositionZ -= .6 : 65 == t ? this.gameObject.transform.localPositionX += .6 : 68 == t ? this.gameObject.transform.localPositionX -= .6 : 69 == t ? this.gameObject.transform.localPositionY += .6 : 81 == t && (this.gameObject.transform.localPositionY -= .6)
        }
        init() {}
        SetCameraAngle(e, t, i, a=1) {
            this.backDistance = e,
            this.rightDistance = i,
            this.vectorUp = new D(0,t,0),
            this.m_rotspeed = a
        }
        cameraMove(e, t, i) {
            let a = new D(0,0,0);
            Ie.player.transform.getRight(a),
            this._PositionTarget = e.add(this.vectorUp).subtract(t.multiply(this.backDistance)).add(a.multiply(this.rightDistance));
            let n = new D(0,0,0)
              , s = new D(this.transform.position.x,this.transform.position.y,this.transform.position.z);
            Laya.Vector3.lerp(s, this._PositionTarget, i / 1e3 * this.m_rotspeed, n),
            this.transform.position = n,
            this.transform.lookAt(e, this.vectorUp, !1)
        }
        cameraEndRoundMove(e, t) {
            let i = new D(this.m_endRot.x,this.m_endRot.y,this.m_endRot.z)
              , a = this.m_distance * Math.cos(i.x * Math.PI / 180)
              , n = this.m_distance * Math.sin(i.x * Math.PI / 180)
              , s = e.x + a * Math.cos(i.y * Math.PI / 180)
              , l = e.z + a * Math.sin(i.y * Math.PI / 180)
              , o = e.y + n
              , r = new D(0,0,0)
              , h = new D(this.transform.position.x,this.transform.position.y,this.transform.position.z);
            Laya.Vector3.lerp(h, new D(s,o,l), Laya.updateTimer.delta / 1e3 * 2, r),
            this.transform.position = r,
            this.transform.lookAt(new D(e.x,e.y + .2,e.z), this.vectorUp, !1)
        }
    }
    class N extends Laya.Script {
        static getRandomInt(e, t) {
            var i = t - e
              , a = Math.random();
            return e + Math.round(a * i)
        }
        static randStringList(e) {
            for (var t = []; e.length > 0; ) {
                var i = Math.floor(Math.random() * e.length);
                t.push(e[i]),
                e.splice(i, 1)
            }
            return t
        }
        static getNowDate() {
            const e = new Date;
            let t = e.getMonth() + 1
              , i = e.getDate();
            return t <= 9 && (t = "0" + t),
            i <= 9 && (i = "0" + i),
            e.getFullYear() + "-" + t + "-" + i + " " + e.getHours() + ":" + e.getMinutes() + ":" + e.getSeconds()
        }
        static getDate() {
            const e = new Date;
            let t = e.getMonth() + 1
              , i = e.getDate();
            return t <= 9 && (t = "0" + t),
            i <= 9 && (i = "0" + i),
            e.getFullYear() + "-" + t + "-" + i
        }
        static getDateNum() {
            return (new Date).getDate()
        }
        static stringToBytes(e) {
            var t, i, a = new Array;
            t = e.length;
            for (var n = 0; n < t; n++)
                (i = e.charCodeAt(n)) >= 65536 && i <= 1114111 ? (a.push(i >> 18 & 7 | 240),
                a.push(i >> 12 & 63 | 128),
                a.push(i >> 6 & 63 | 128),
                a.push(63 & i | 128)) : i >= 2048 && i <= 65535 ? (a.push(i >> 12 & 15 | 224),
                a.push(i >> 6 & 63 | 128),
                a.push(63 & i | 128)) : i >= 128 && i <= 2047 ? (a.push(i >> 6 & 31 | 192),
                a.push(63 & i | 128)) : a.push(255 & i);
            return a
        }
        static byteToString(e) {
            if ("string" == typeof e)
                return e;
            for (var t = "", i = e, a = 0; a < i.length; a++) {
                var n = i[a].toString(2)
                  , s = n.match(/^1+?(?=0)/);
                if (s && 8 == n.length) {
                    for (var l = s[0].length, o = i[a].toString(2).slice(7 - l), r = 1; r < l; r++)
                        o += i[r + a].toString(2).slice(2);
                    t += String.fromCharCode(parseInt(o, 2)),
                    a += l - 1
                } else
                    t += String.fromCharCode(i[a])
            }
            return t
        }
        static WorldToScreen2(e, t) {
            var i = this.InverseTransformPoint(e.transform, t).z
              , a = new Laya.Vector3;
            return e.viewport.project(t, e.projectionViewMatrix, a),
            new Laya.Vector3(a.x / Laya.stage.clientScaleX,a.y / Laya.stage.clientScaleY,i)
        }
        static ScreenToWorld(e, t) {
            var i = .5 * e.fieldOfView * Math.PI / 180;
            let a = t.z * Math.tan(i)
              , n = a * e.aspectRatio
              , s = this.GetLowerLeft(e.transform, t.z, n, a)
              , l = this.GetScreenScale(n, a);
            var o = new Laya.Vector3
              , r = this.InverseTransformPoint(e.transform, s);
            return o = new Laya.Vector3(-t.x / l.x,t.y / l.y,0),
            Laya.Vector3.add(r, o, o),
            o = this.TransformPoint(e.transform, o)
        }
        static GetScreenScale(e, t) {
            var i = new Laya.Vector3;
            return i.x = Laya.stage.width / e / 2,
            i.y = Laya.stage.height / t / 2,
            i
        }
        static GetLowerLeft(e, t, i, a) {
            var n = new Laya.Vector3
              , s = new Laya.Vector3;
            e.getRight(s),
            Laya.Vector3.normalize(s, s);
            var l = new Laya.Vector3(s.x * i,s.y * i,s.z * i);
            Laya.Vector3.add(e.position, l, n);
            var o = new Laya.Vector3;
            e.getUp(o),
            Laya.Vector3.normalize(o, o);
            var r = new Laya.Vector3(o.x * a,o.y * a,o.z * a);
            Laya.Vector3.subtract(n, r, n);
            var h = new Laya.Vector3;
            e.getForward(h),
            Laya.Vector3.normalize(h, h);
            var d = new Laya.Vector3(h.x * t,h.y * t,h.z * t);
            return Laya.Vector3.subtract(n, d, n),
            n
        }
        static InverseTransformPoint(e, t) {
            var i = new Laya.Vector3;
            e.getRight(i);
            var a = new Laya.Vector3;
            e.getUp(a);
            var n = new Laya.Vector3;
            e.getForward(n);
            var s = new Laya.Vector3(-n.x,-n.y,-n.z)
              , l = this.ProjectDistance(t, e.position, i)
              , o = this.ProjectDistance(t, e.position, a)
              , r = this.ProjectDistance(t, e.position, s);
            return new Laya.Vector3(l,o,r)
        }
        static TransformPoint(e, t) {
            var i = new Laya.Vector3;
            return Laya.Vector3.transformQuat(t, e.rotation, i),
            Laya.Vector3.add(i, e.position, i),
            i
        }
        static ProjectDistance(e, t, i) {
            var a = new Laya.Vector3;
            Laya.Vector3.subtract(e, t, a);
            var n = this.Angle2(a, i) * Math.PI / 180
              , s = Laya.Vector3.distance(e, t);
            return s *= Math.cos(n)
        }
        static Angle2(e, t) {
            var i = (e.x * t.x + e.y * t.y + e.z * t.z) / (Math.sqrt(e.x * e.x + e.y * e.y + e.z * e.z) * Math.sqrt(t.x * t.x + t.y * t.y + t.z * t.z));
            return i < -1 && (i = -1),
            i > 1 && (i = 1),
            180 * Math.acos(i) / Math.PI
        }
    }
    class j extends Laya.AnimatorStateScript {
        constructor() {
            super()
        }
        onStateEnter() {}
        onStateUpdate() {}
        onStateExit() {
            if (this.animType == n.cheng && this.player.animType == n.cheng)
                this.player.play(n.run);
            else if (this.animType == n.slide && this.player.animType == n.slide)
                1 == this.player.characterController.isGrounded ? this.player.play(n.run) : this.player.play(n.falling);
            else if (this.animType == n.flip && this.player.animType == n.flip)
                1 == this.player.characterController.isGrounded ? this.player.play(n.run) : this.player.play(n.falling);
            else if (this.animType == n.jump_cheng && this.player.animType == n.jump_cheng)
                1 == this.player.characterController.isGrounded ? this.player.play(n.run) : this.player.play(n.falling);
            else if (this.animType == n.jump_cheng2 && this.player.animType == n.jump_cheng2)
                1 == this.player.characterController.isGrounded ? this.player.play(n.run) : this.player.play(n.falling);
            else if (this.animType == n.fallToRun && this.player.animType == n.fallToRun)
                this.player.play(n.run);
            else if (this.animType == n.fallToLand && this.player.animType == n.fallToLand)
                this.player.play(n.run);
            else if (this.animType == n.roll && this.player.animType == n.roll)
                this.player.play(n.falling);
            else if ((this.animType == n.jump || this.animType == n.jump2) && 1 == this.player.isJunmp() && 0 == this.player.characterController.isGrounded) {
                if (this.player.m_speedWAdd > .06)
                    return void this.player.play(n.roll);
                this.player.play(n.falling)
            }
        }
    }
    class V {
        constructor() {}
        static linearModel(e, t, i) {
            if (e instanceof Laya.MeshSprite3D) {
                var a = e
                  , n = a.meshFilter.sharedMesh
                  , s = [];
                n.getPositions(s);
                for (var l = n.getSubMesh(0).getIndices(), o = 0; o < l.length; o += 3) {
                    var r = s[l[o]]
                      , h = s[l[o + 1]]
                      , d = s[l[o + 2]];
                    Laya.Vector3.transformCoordinate(r, a.transform.worldMatrix, this.transVertex0),
                    Laya.Vector3.transformCoordinate(h, a.transform.worldMatrix, this.transVertex1),
                    Laya.Vector3.transformCoordinate(d, a.transform.worldMatrix, this.transVertex2),
                    t.addLine(this.transVertex0, this.transVertex1, i, i),
                    t.addLine(this.transVertex1, this.transVertex2, i, i),
                    t.addLine(this.transVertex2, this.transVertex0, i, i)
                }
            }
            o = 0;
            for (var c = e.numChildren; o < c; o++)
                V.linearModel(e.getChildAt(o), t, i)
        }
        static linearMeshCollider(e, t, i) {
            if (e instanceof Laya.MeshSprite3D) {
                var a = e
                  , n = a.meshFilter.sharedMesh
                  , s = [];
                n.getPositions(s);
                for (var l = n.getSubMesh(0).getIndices(), o = 0; o < l.length; o += 3) {
                    var r = s[l[o]]
                      , h = s[l[o + 1]]
                      , d = s[l[o + 2]];
                    Laya.Vector3.transformCoordinate(r, a.transform.worldMatrix, this.transVertex0),
                    Laya.Vector3.transformCoordinate(h, a.transform.worldMatrix, this.transVertex1),
                    Laya.Vector3.transformCoordinate(d, a.transform.worldMatrix, this.transVertex2),
                    t.addLine(this.transVertex0, this.transVertex1, i, i),
                    t.addLine(this.transVertex1, this.transVertex2, i, i),
                    t.addLine(this.transVertex2, this.transVertex0, i, i)
                }
            }
            o = 0;
            for (var c = e.numChildren; o < c; o++)
                V.linearMeshCollider(e.getChildAt(o), t, i)
        }
    }
    V.transVertex0 = new Laya.Vector3,
    V.transVertex1 = new Laya.Vector3,
    V.transVertex2 = new Laya.Vector3,
    function(e) {
        e.TOP = "Top",
        e.BOTTOM = "Bottom"
    }(f || (f = {}));
    class W {
        static init() {
            let e = window.PokiSDK.init();
            return window.PokiSDK.setDebug(this.isDebug),
            e
        }
        static happyTime() {
            window.PokiSDK.happyTime()
        }
        static midroll(e) {
            console.log("midroll");
            let t = this.isInGameplay;
            t && this.gameplayStop();
            let i = Laya.SoundManager.muted;
            Laya.SoundManager.muted = !0,
            window.PokiSDK.commercialBreak().then( () => {
                t && this.gameplayStart(),
                Laya.SoundManager.muted = i,
                Laya.SoundManager.muted || C.instance.verifyIfShouldPlay(),
                e()
            }
            )
        }
        static rewarded(e) {
            console.log("rewarded");
            let t = this.isInGameplay;
            t && this.gameplayStop();
            let i = Laya.SoundManager.muted;
            Laya.SoundManager.muted = !0,
            window.PokiSDK.rewardedBreak().then(a => {
                t && this.gameplayStart(),
                Laya.SoundManager.muted = i,
                Laya.SoundManager.muted || C.instance.verifyIfShouldPlay(),
                e(a)
            }
            )
        }
        static showBanner(e=W.BANNER_POSITION.TOP) {
            window.showBanner(e)
        }
        static destroyBanner() {
            window.destroyBanner()
        }
        static gameplayStart() {
            this.isInGameplay || (this.isInGameplay = !0,
            console.log("Poki: Gameplay start"),
            window.PokiSDK.gameplayStart())
        }
        static gameplayStop() {
            this.isInGameplay && (this.isInGameplay = !1,
            console.log("Poki: Gameplay stop"),
            window.PokiSDK.gameplayStop())
        }
    }
    W.BANNER_POSITION = f,
    W.isInGameplay = !1,
    W.isDebug = !1;
    class F extends Laya.Script3D {
        constructor() {
            super(...arguments),
            this.skinnedMeshDic = {},
            this.isMoving = !1,
            this.ResurrectionPointIndex = 0,
            this.VelocityRatio = 1,
            this.vectorUp = new D(0,1,0),
            this.offesetPos = new D(0,0,0),
            this.isEnemy = !0,
            this.EnemyId = 0,
            this.isvictory = !1,
            this.EnemyIndex = g.EnemyLeft,
            this.isFallWater = !1,
            this.DanceIndex = 0,
            this.AiDataTempNum = 0,
            this.isPropUp = !1,
            this.isPropUpLimit = !1,
            this.isbClimb = !1,
            this.isTouchdown = !1,
            this.isSideslip = !1,
            this.isFlip = !1,
            this.isSlide = !1,
            this.SideslipTpye = 0,
            this.m_speedW = .044,
            this.m_speedWAdd = 0,
            this.m_speedWAddAttenu = 2e-5,
            this.m_speedWAddMax = .18,
            this.m_speedAD = 0,
            this.m_localRotationEulerY = 0,
            this.m_speedWY = .03,
            this.m_speedADY = .3,
            this.m_speedWCY = .015,
            this.m_speedWCX = .015,
            this.m_speedADCoefficient = .05,
            this.m_JumpH = 5,
            this.m_JumpADCoefficient = 1,
            this.m_JumpWCoefficient = 1,
            this.m_fallSpeed = 6,
            this.m_defaultFallSpeed = 6,
            this.m_fastFallSpeed = 2e3,
            this.m_slowFallSpeed = 2.8,
            this.m_fallSideslipSpeed = 2,
            this.m_jumpSpeed = 4,
            this.m_gravity = new D(0,-11,0),
            this.m_RankingNum = 1,
            this.m_TraTime = .6,
            this.m_IsLoad = !1,
            this.m_isAiF = !1,
            this.isZhanting = !1,
            this._Zoffset = 3.5
        }
        onAwake() {
            this.gameObject = this.owner,
            this.transform = this.gameObject.transform,
            this._skinType = a.Man,
            this._skinIndex = 1;
            let e = this.gameObject.getChildByName("PlayerFX");
            if (null != e && (this.m_WorldSpeedLine = e.getChildByName("World Speed Line"),
            this.m_WallJumpParticleL = e.getChildByName("Wall Jump Particle L"),
            this.m_WallJumpParticleR = e.getChildByName("Wall Jump Particle R"),
            this.m_JumpParticle = e.getChildByName("Jump Particle"),
            this.m_BigJumpParticle = e.getChildByName("Big Jump Particle"),
            this.m_RunParticle = e.getChildByName("Run Particle"),
            this.m_LandParticle = e.getChildByName("Land Particle"),
            this.m_SpeedUpParticle = e.getChildByName("SpeedUp Particle"),
            this.m_WinParticle = e.getChildByName("Win Particle"),
            this.m_LittleTrailSpeed = e.getChildByName("Little Trail Speed"),
            this.m_BreakGrass = e.getChildByName("BreakGrass"),
            this.m_WorldSpeedLine.active = !1,
            this.m_BigJumpParticle.active = !1,
            this.m_LittleTrailSpeed.active = !1,
            this.m_WinParticle.active = !1),
            this.player = this.gameObject.getChildByName("Player" + this._skinIndex),
            null != this.player && (this.player.active = !0,
            this.m_crowned = this.player.getChildAt(0),
            this.m_crowned.active = !1,
            null != this.m_RunParticle && (this._partical_yanwu = this.m_RunParticle,
            null != this._partical_yanwu && (this._partical_yanwu.active = !0,
            this._partical_yanwu.particleSystem.pause())),
            null != this.m_LittleTrailSpeed && (this.m_LittleTrailSpeed.active = !1,
            this.m_LittleTrailSpeed.active = !0),
            this.m_LeftHand = this.findChild(this.player, "mixamorig:LeftHand"),
            this.RightHand = this.findChild(this.player, "mixamorig:RightHand"),
            this.animType = n.Idle,
            this.PlayerCount = 1,
            this.CapsuleColliderShapeTemp = new Laya.CapsuleColliderShape(.17,1),
            this.animator = this.player.getComponent(Laya.Animator),
            this.skinnedMesh = this.player.getChildAt(1).getChildAt(0),
            this.skinnedMesh.skinnedMeshRenderer.castShadow = !0,
            null == this.gameObject.getComponent(Laya.CharacterController))) {
                let e = this.gameObject.addComponent(Laya.CharacterController)
                  , t = new Laya.CapsuleColliderShape(.15,.3);
                t.localOffset.y = .15,
                t.localOffset.z = 0,
                e.colliderShape = t,
                e.fallSpeed = this.m_fallSpeed,
                e.jumpSpeed = this.m_jumpSpeed,
                this.transform = this.gameObject.transform,
                e.gravity = this.m_gravity,
                this.characterController = e
            }
        }
        findChild(e, t) {
            return e.name == t ? e : this._findChild(e._children, t)
        }
        _findChild(e, t) {
            for (var i = [], a = 0; a < e.length; a++) {
                var n = e[a];
                if (n.name == t)
                    return n;
                n.numChildren && (i = i.concat(n._children))
            }
            return i.length ? this._findChild(i, t) : null
        }
        changeInit(e, t, i) {
            if (this._skinType = e,
            this._skinIndex = t,
            t += 1,
            console.error("换皮肤：" + this._skinIndex),
            this.player = this.gameObject.getChildByName("Player" + this._skinIndex),
            null == this.player) {
                let e = Laya.Loader.getRes(Ie.URL + "res/LayaScene_ObjScene/Conventional/Player" + this._skinIndex + ".lh");
                if (null == e)
                    this.player = this.gameObject.getChildByName("Player" + (Ie.SkinIndex + 1)),
                    this.InitTuoWei(Ie.DanceIndex),
                    this.InitBeiBu(),
                    this.InitPlayer(!1),
                    Laya.Sprite3D.load(Ie.URL + "res/LayaScene_ObjScene/Conventional/Player" + this._skinIndex + ".lh", Laya.Handler.create(this, function(e) {
                        e.transform.position = new D(0,0,0);
                        let t = Laya.Sprite3D.instantiate(e, Ie.mainScene, !1, new Laya.Vector3(0,0,0));
                        this.player = this.gameObject.addChild(t),
                        this.InitTuoWei(i),
                        this.InitBeiBu(),
                        this.InitPlayer(!1)
                    }));
                else {
                    e.transform.position = new D(0,0,0);
                    let t = Laya.Sprite3D.instantiate(e, Ie.mainScene, !1, new Laya.Vector3(0,0,0));
                    this.player = this.gameObject.addChild(t),
                    this.InitTuoWei(i),
                    this.InitBeiBu(),
                    this.InitPlayer(!1)
                }
            } else
                this.InitTuoWei(i),
                this.InitBeiBu(),
                this.InitPlayer(!1)
        }
        init(e, t, i, a) {
            if (this.Ranking = 0,
            t += 1,
            this.PlayerCount = i,
            1 == a && (this.offesetPos.x = 0,
            this.offesetPos.y = 0,
            this.offesetPos.z = 0),
            this.m_WinParticle && (this.m_WinParticle.active = !1),
            this.VelocityRatio = 1,
            this.aiWaitTime = 0,
            this.aiIgnoreTime = 0,
            this.aiAddTime = 0,
            this.isvictory = !1,
            this.AiDataTempNum = 0,
            this.isFallWater = !1,
            this.m_IsLoad = !1,
            null != this.m_WorldSpeedLine && (this.m_WorldSpeedLine.active = !1,
            this.m_BigJumpParticle.active = !1,
            this.m_LittleTrailSpeed.active = !1),
            this._skinType = e,
            this._skinIndex = t,
            this.m_isAiF = !1,
            this.player = this.gameObject.getChildByName("Player" + this._skinIndex),
            null == this.player) {
                let e = Laya.Loader.getRes(Ie.URL + "res/LayaScene_ObjScene/Conventional/Player" + this._skinIndex + ".lh");
                if (null == e)
                    Laya.Sprite3D.load(Ie.URL + "res/LayaScene_ObjScene/Conventional/Player" + this._skinIndex + ".lh", Laya.Handler.create(this, function(e) {
                        e.transform.position = new D(0,0,0);
                        let t = Laya.Sprite3D.instantiate(e, Ie.mainScene, !1, new Laya.Vector3(0,0,0));
                        this.player = this.gameObject.addChild(t),
                        this.InitTuoWei(Ie.DanceIndex),
                        this.InitBeiBu(),
                        this.InitPlayer(!1),
                        this.m_IsLoad = !0
                    }));
                else {
                    e.transform.position = new D(0,0,0);
                    let t = Laya.Sprite3D.instantiate(e, Ie.mainScene, !1, new Laya.Vector3(0,0,0));
                    this.player = this.gameObject.addChild(t),
                    this.InitTuoWei(Ie.DanceIndex),
                    this.InitBeiBu(),
                    this.InitPlayer(!1),
                    this.m_IsLoad = !0
                }
            } else
                this.InitTuoWei(Ie.DanceIndex),
                this.InitBeiBu(),
                this.InitPlayer(a),
                this.m_IsLoad = !0
        }
        forceLoadInstantly() {
            console.log("Load with default skin");
            let e = Ie.defaultSkin;
            e.transform.position = new D(0,0,0);
            let t = Laya.Sprite3D.instantiate(e, Ie.mainScene, !1, new Laya.Vector3(0,0,0));
            this.player = this.gameObject.addChild(t),
            this.InitTuoWei(Ie.DanceIndex),
            this.InitBeiBu(),
            this.InitPlayer(!1),
            this.m_IsLoad = !0
        }
        InitTuoWei(e) {
            this.m_LeftHand = this.findChild(this.player, "mixamorig:LeftHand"),
            this.RightHand = this.findChild(this.player, "mixamorig:RightHand");
            for (let e = 0; e < this.m_LeftHand.numChildren; ++e) {
                let t = this.m_LeftHand.getChildAt(e).name.split("_");
                2 == t.length && "taril" == t[0] && (this.m_LeftHand.getChildAt(e).active = !1)
            }
            for (let e = 0; e < this.RightHand.numChildren; ++e) {
                let t = this.RightHand.getChildAt(e).name.split("_");
                2 == t.length && "taril" == t[0] && (this.RightHand.getChildAt(e).active = !1)
            }
            if (1 == this.isEnemy)
                return;
            let t = "taril_" + e
              , i = this.m_LeftHand.getChildByName(t);
            if (null != i) {
                i.active = !0;
                let e = this.RightHand.getChildByName(t);
                e.active = !0,
                48 == this._skinIndex || 50 == this._skinIndex || 53 == this._skinIndex || 55 == this._skinIndex ? i.transform.localScale = new D(.04,.04,.04) : this._skinIndex >= 40 ? i.transform.localScale = new D(.1,.1,.1) : i.transform.localScale = new D(.2,.2,.2),
                48 == this._skinIndex || 50 == this._skinIndex || 53 == this._skinIndex || 55 == this._skinIndex ? e.transform.localScale = new D(.04,.04,.04) : this._skinIndex >= 40 ? e.transform.localScale = new D(.1,.1,.1) : e.transform.localScale = new D(.2,.2,.2),
                this.m_TrailSprite3DL = i.getChildByName("TrailSprite1"),
                this.m_TrailSprite3DR = e.getChildByName("TrailSprite1"),
                this.m_TrailSprite3DL1 = i.getChildByName("TrailSprite2"),
                this.m_TrailSprite3DR1 = e.getChildByName("TrailSprite2")
            } else
                Laya.Sprite3D.load(Ie.URL + "res/LayaScene_ObjScene/Conventional/" + t + ".lh", Laya.Handler.create(this, function(e) {
                    if (e.transform.localPosition = new D(0,0,0),
                    null == this.m_LeftHand.getChildByName(e.name)) {
                        let t = e.clone();
                        t.transform.localPosition = new D(0,0,0),
                        48 == this._skinIndex || 50 == this._skinIndex || 53 == this._skinIndex || 55 == this._skinIndex ? t.transform.localScale = new D(.04,.04,.04) : this._skinIndex >= 40 ? t.transform.localScale = new D(.1,.1,.1) : t.transform.localScale = new D(.2,.2,.2),
                        this.m_LeftHand.addChild(t),
                        this.m_TrailSprite3DL = t.getChildByName("TrailSprite1"),
                        this.m_TrailSprite3DL1 = t.getChildByName("TrailSprite2"),
                        t.active = !0
                    }
                    if (null == this.RightHand.getChildByName(e.name)) {
                        let t = e.clone();
                        48 == this._skinIndex || 50 == this._skinIndex || 53 == this._skinIndex || 55 == this._skinIndex ? t.transform.localScale = new D(.04,.04,.04) : this._skinIndex >= 40 ? t.transform.localScale = new D(.1,.1,.1) : t.transform.localScale = new D(.2,.2,.2),
                        t.transform.localPosition = new D(0,0,0),
                        this.RightHand.addChild(t),
                        this.m_TrailSprite3DR = t.getChildByName("TrailSprite1"),
                        this.m_TrailSprite3DR1 = t.getChildByName("TrailSprite2"),
                        t.active = !0
                    }
                }))
        }
        InitBeiBu() {
            Laya.Texture2D.load(Ie.URL + "res/texture/tag_" + this._skinType + ".png", Laya.Handler.create(this, function(e) {
                if (null != this.player)
                    if ("Player46" == this.player.name || "Player51" == this.player.name || "Player49" == this.player.name || "Player54" == this.player.name || "Player56" == this.player.name) {
                        let t = this.player.getChildAt(1).getChildAt(1).getChildAt(2).getChildAt(0).getChildAt(0);
                        t.meshRenderer.materials[t.meshRenderer.materials.length - 1].albedoTexture = e
                    } else {
                        let a = this.player.getChildAt(1).getChildAt(0)
                          , n = a.skinnedMeshRenderer.materials[a.skinnedMeshRenderer.materials.length - 1];
                        if ("Tag(Instance)" != n.name)
                            for (var t = 0; t < a.skinnedMeshRenderer.materials.length; t++) {
                                var i = a.skinnedMeshRenderer.materials[t];
                                if ("Tag(Instance)" == i.name) {
                                    n = i;
                                    break
                                }
                            }
                        null != n && (n.albedoTexture = e)
                    }
            }))
        }
        InitPlayer(e) {
            if (0 == this.isEnemy) {
                let e = this.gameObject.getChildByName("PlayerFX");
                null == e && Laya.Sprite3D.load(Ie.URL + "res/LayaScene_ObjScene/Conventional/PlayerFX.lh", Laya.Handler.create(this, function(t) {
                    this.gameObject.addChild(t),
                    t.transform.localPosition = new D(0,.3,0),
                    t.transform.localScale = new D(1,1,1),
                    e = t,
                    this.m_WorldSpeedLine = e.getChildByName("World Speed Line"),
                    this.m_WallJumpParticleL = e.getChildByName("Wall Jump Particle L"),
                    this.m_WallJumpParticleR = e.getChildByName("Wall Jump Particle R"),
                    this.m_JumpParticle = e.getChildByName("Jump Particle"),
                    this.m_BigJumpParticle = e.getChildByName("Big Jump Particle"),
                    this.m_RunParticle = e.getChildByName("Run Particle"),
                    this.m_LandParticle = e.getChildByName("Land Particle"),
                    this.m_SpeedUpParticle = e.getChildByName("SpeedUp Particle"),
                    this.m_WinParticle = e.getChildByName("Win Particle"),
                    this.m_LittleTrailSpeed = e.getChildByName("Little Trail Speed"),
                    this.m_BreakGrass = e.getChildByName("BreakGrass"),
                    this.m_WorldSpeedLine.active = !1,
                    this.m_BigJumpParticle.active = !1,
                    this.m_LittleTrailSpeed.active = !1,
                    this.m_WinParticle.active = !1,
                    null != this.m_RunParticle && (this._partical_yanwu = this.m_RunParticle,
                    null != this._partical_yanwu && (this._partical_yanwu.active = !0,
                    this._partical_yanwu.particleSystem.pause())),
                    null != this.m_LittleTrailSpeed && (this.m_LittleTrailSpeed.active = !1)
                }))
            } else
                this.m_speedW = .02,
                this.m_speedWY = .017;
            if (null == this.gameObject.getComponent(Laya.CharacterController)) {
                let e = this.gameObject.addComponent(Laya.CharacterController)
                  , t = new Laya.CapsuleColliderShape(.15,.3);
                t.localOffset.y = .15,
                t.localOffset.z = 0,
                e.colliderShape = t,
                e.fallSpeed = this.m_fallSpeed,
                e.jumpSpeed = this.m_jumpSpeed,
                this.transform = this.gameObject.transform,
                e.gravity = this.m_gravity,
                this.characterController = e
            }
            this.characterController.enabled = !0,
            this.characterController.fallSpeed = this.m_fallSpeed,
            this.characterController.move(new D(0,0,0));
            for (let e = 0; e <= this.gameObject.numChildren; ++e) {
                let t = this.gameObject.getChildAt(e);
                null != t && "PlayerFX" != t.name && (t.active = !1)
            }
            if (null == this.player)
                return;
            if (this.player.active = !0,
            this.m_crowned = this.player.getChildAt(0),
            this.m_crowned.active = !1,
            this.animator = this.player.getComponent(Laya.Animator),
            this.skinnedMesh = this.player.getChildAt(1).getChildAt(0),
            this.skinnedMesh.skinnedMeshRenderer.castShadow = !0,
            this.InitAnimatorState(n.jump, !1),
            this.InitAnimatorState(n.jump2, !1),
            this.InitAnimatorState(n.cheng, !1),
            this.InitAnimatorState(n.clim, !0),
            this.InitAnimatorState(n.slide, !1),
            this.InitAnimatorState(n.flip, !1),
            this.InitAnimatorState(n.jump_cheng, !1),
            this.InitAnimatorState(n.jump_cheng2, !1),
            this.InitAnimatorState(n.fallToRun, !1),
            this.InitAnimatorState(n.fallToLand, !1),
            this.InitAnimatorState(n.roll, !1),
            this.animator.getControllerLayer().getAnimatorState(n.run).speed = 1,
            this.animator.getControllerLayer().getAnimatorState(n.onWallLeft).speed = 1.5,
            this.animator.getControllerLayer().getAnimatorState(n.onWallRight).speed = 1.5,
            this.m_LeftHand = this.findChild(this.player, "mixamorig:LeftHand"),
            this.RightHand = this.findChild(this.player, "mixamorig:RightHand"),
            this.animType = n.Idle,
            this.PlayerCount = 1,
            this.CapsuleColliderShapeTemp = new Laya.CapsuleColliderShape(.17,1),
            this.animator = this.player.getComponent(Laya.Animator),
            this.skinnedMesh = this.player.getChildAt(1).getChildAt(0),
            this.skinnedMesh.skinnedMeshRenderer.castShadow = !0,
            this.EnemyIndex == g.EnemyUi)
                return void (null != this.rigidBody && (this.rigidBody.enabled = !1));
            this.play(n.Idle),
            this.isMoving = !1,
            null != this._partical_yanwu && this._partical_yanwu.particleSystem.pause(),
            this.animator.speed = 1,
            1 == e && (this.transform.localRotationEulerY = 0,
            this.player.transform.localRotationEulerX = 0,
            this.player.transform.localRotationEulerY = 0,
            this.player.transform.localRotationEulerZ = 0,
            this.player.transform.localPositionX = 0,
            this.player.transform.localPositionY = 0,
            this.player.transform.localPositionZ = 0,
            this.transform.localRotationEulerY = 0,
            this.player.transform.localRotationEulerX = 0);
            Laya.updateTimer.delta;
            0 == this.isEnemy && (this.m_Panel_MainMenu = Le.instance().GetPanel(u.Panel_MainMenu))
        }
        InitAnimatorState(e, t) {
            let i = this.animator.getControllerLayer().getAnimatorState(e);
            if (null == i.getScript(j)) {
                i.clip.islooping = t;
                let a = this.animator.getControllerLayer().getAnimatorState(e).addScript(j);
                a.animType = e,
                a.player = this
            }
        }
        AddAiData() {
            if (0 != this.isEnemy && (this.aiAddTime += Laya.updateTimer.delta,
            this.aiAddTime > 1e4)) {
                if (this.aiAddTime = 0,
                this.AiDataTempNum += 1,
                Number(ne.instance.AiDataId[2]) + this.AiDataTempNum > 6)
                    return
            }
        }
        InitPlayerPos(e) {
            if (0 == e)
                return;
            let t = 0;
            if (t = 2 == Ie.playerNum ? Ie.PlayerToPlayerOff2 : Ie.PlayerToPlayerOff3,
            this.EnemyIndex != g.EnemyUi) {
                if (0 == this.isEnemy)
                    this.transform.position = new D(0,6.1,-1.3),
                    this.PlayerToPlayerOffTemp = 0,
                    this.characterController.fallSpeed = 0,
                    this.characterController.move(new D(0,0,0)),
                    this.characterController.jumpSpeed = 0,
                    this.characterController.enabled = !1,
                    this.m_speedWAdd = 0;
                else {
                    let e = Ie.EnemyPosList[this.EnemyId];
                    this.transform.position = null != e ? e : new D(.5,6.3,-1.3)
                }
                if (this.my_recoveryPos = new D(this.transform.position.x,this.transform.position.y,this.transform.position.z),
                this.EnemyId >= 2) {
                    let e = new D(this.transform.position.x,this.transform.position.y,this.transform.position.z);
                    e.y -= ne.instance.m_LevelAniY,
                    this.transform.position = e,
                    this.m_pos = this.transform.position
                }
            }
        }
        skinType(e) {}
        play(e) {
            null != this.animator && (this.animator.play(e),
            this.animType = e)
        }
        startMove() {
            this.gameObject.active || (this.gameObject.active = !0),
            this.characterController.enabled = !0,
            this.characterController.jumpSpeed = this.m_jumpSpeed,
            this.play(n.run),
            0 == this.isEnemy && Le.instance().GetPanel(u.Panel_MainMenu).Closestudy()
        }
        stopMove() {
            this.characterController.move(new D(0,0,0)),
            this.animType = n.Idle
        }
        isClimb() {
            return this.animType == n.clim
        }
        isInAir() {
            return !(!this.isJunmp() && this.animType != n.falling && this.animType != n.roll)
        }
        isGetFlip() {
            return this.animType == n.flip || this.animType == n.jump_cheng || this.animType == n.jump_cheng2
        }
        isJunmp() {
            return this.animType == n.jump || this.animType == n.jump2
        }
        isNoJunmp() {
            return this.animType != n.jump && this.animType != n.jump2
        }
        recoveryMove() {
            this.EnemyIndex != g.EnemyUi && 0 != we.instance.isPlayerGame() && (this.transform.position = this.my_recoveryPos,
            this.play(n.run),
            this.m_speedWAdd = 0)
        }
        collision(e) {}
        speedWAdd(e) {
            0 == this.isEnemy && (C.instance.vibration(h.shortVibration),
            C.instance.playSound(o.spead, 1)),
            this.m_speedWAdd += e,
            this.m_speedWAdd > this.m_speedWAddMax && (this.m_speedWAdd = this.m_speedWAddMax),
            null != this.m_SpeedUpParticle && this.m_speedWAdd >= .02 && this.m_SpeedUpParticle.particleSystem.play()
        }
        onSlide(e) {
            this.speedWAdd(e),
            this.play(n.slide)
        }
        onFlip(e) {
            if (this.isFlip = !0,
            this.animType == n.flip || this.animType == n.jump_cheng || this.animType == n.jump_cheng2)
                return;
            this.speedWAdd(e);
            let t = N.getRandomInt(0, 2);
            0 == t ? this.play(n.flip) : 1 == t ? this.play(n.jump_cheng) : 2 == t && this.play(n.jump_cheng2),
            this.characterController.jump(new D(this.m_speedAD * this.m_JumpADCoefficient,2 * (1.5 + 10 * this.m_speedWAdd),(this.m_speedW + this.m_speedWAdd) * this.m_JumpWCoefficient))
        }
        onJump(e, t, i, a) {
            if (this.isEnemy || console.log("sasds"),
            0 == we.instance.isPlayerGame())
                return;
            if (1 == this.isJunmp())
                return;
            if (0 == i && (i = this.m_JumpH),
            (this.animType == n.clim || this.animType == n.cheng || 1 == this.isSideslip) && 1 == e)
                return;
            if (1 == this.isPropUp || 1 == this.isPropUpLimit)
                return;
            if (1 == this.isFlip && 1 == e)
                return;
            if (1 == this.isClimb() && 3 != e)
                return;
            if (this.animType == n.run && 1 == this.isPropUp && 1 == e)
                return;
            let s = 1
              , l = 1
              , o = !1;
            2 == e && (this.speedWAdd(t),
            1 == this.isInAir() && (s = 2,
            l = 2,
            o = !0)),
            N.getRandomInt(0, 100) >= 50 ? this.play(n.jump2) : this.play(n.jump),
            null != this.m_JumpParticle && this.m_JumpParticle.particleSystem.play(),
            o ? null != this.m_BigJumpParticle && (this.m_BigJumpParticle.active = !0) : null != this.m_JumpParticle && this.m_JumpParticle.particleSystem.play(),
            this.characterController.jump(new D(this.m_speedAD * this.m_JumpADCoefficient,i * (1 + 10 * this.m_speedWAdd) * s,(this.m_speedW + this.m_speedWAdd + a) * this.m_JumpWCoefficient * l))
        }
        onTouchdown(e, t) {
            this.isTouchdown = !0,
            this.animType != n.fallToRun && this.animType != n.fallToLand && (1 == e && (this.my_recoveryPos = t),
            1 != this.isFlip && 1 != this.isSlide && this.animType != n.cheng && this.animType != n.clim && this.animType != n.flip && (null != this.m_LandParticle && this.m_LandParticle.particleSystem.play(),
            1 == this.isInAir() && this.m_speedWAdd >= .025 ? this.play(n.fallToRun) : 1 == this.isInAir() ? this.play(n.fallToLand) : this.onRun()))
        }
        onRun() {
            this.play(n.run)
        }
        onClimb() {
            this.isbClimb = !0,
            1 != this.isPropUp ? this.play(n.clim) : 1 == this.characterController.isGrounded && this.play(n.run)
        }
        onEscClimb() {
            if (this.isbClimb = !1,
            1 != this.isPropUp)
                this.onJump(3, 0, 0, 0);
            else if (this.animType == n.clim)
                this.play(n.cheng);
            else if (1 == this.characterController.isGrounded)
                this.play(n.run);
            else {
                if (this.animType == n.run)
                    return;
                this.animType != n.cheng && this.play(n.falling)
            }
        }
        onPropUp() {
            this.isPropUp = !0,
            1 != this.isInAir() ? this.animType == n.clim && 1 != this.isPropUpLimit && (0 != this.characterController.isGrounded && Ie.useGmo || this.play(n.cheng)) : 1 == this.characterController.isGrounded && this.play(n.run)
        }
        onPropUpLimit() {
            this.isPropUpLimit = !0,
            this.animType == n.cheng && this.play(n.run)
        }
        onEscPropUpLimit() {
            this.isPropUpLimit = !1
        }
        onEscPropUp() {
            this.isPropUp = !1,
            1 == this.isInAir() && 1 == this.isbClimb && this.onClimb()
        }
        onSideslip(e) {
            this.SideslipTpye = e,
            this.isSideslip = !0,
            this.animType != n.run && this.animType != n.clim && (1 == e ? this.play(n.onWallRight) : this.play(n.onWallLeft))
        }
        onEnd() {
            this.isvictory = !0,
            1 != this.isEnemy && (null != this.m_TrailSprite3DL && null != this.m_TrailSprite3DL.trailFilter && (this.m_TraTime = this.m_TrailSprite3DL.trailFilter.time,
            this.m_TrailSprite3DL.trailFilter.time = 1e5,
            this.m_TrailSprite3DR.trailFilter.time = 1e5),
            null != this.m_TrailSprite3DL1 && null != this.m_TrailSprite3DL1.trailFilter && (this.m_TraTime = this.m_TrailSprite3DL1.trailFilter.time,
            this.m_TrailSprite3DL1.trailFilter.time = 1e5,
            this.m_TrailSprite3DR1.trailFilter.time = 1e5),
            this.animType = n.dance2,
            this.victory())
        }
        SlowDown() {
            this.m_speedWAdd > 0 && (this.animType,
            n.falling)
        }
        onEndMuBu() {
            this.isvictory = !0,
            1 != this.isEnemy && this.victoryOne()
        }
        victoryOne() {
            null != this.m_TrailSprite3DL && null != this.m_TrailSprite3DL.trailFilter && (this.m_TraTime = this.m_TrailSprite3DL.trailFilter.time,
            this.m_TrailSprite3DL.trailFilter.time = 1e5,
            this.m_TrailSprite3DR.trailFilter.time = 1e5),
            null != this.m_TrailSprite3DL1 && null != this.m_TrailSprite3DL1.trailFilter && (this.m_TraTime = this.m_TrailSprite3DL1.trailFilter.time,
            this.m_TrailSprite3DL1.trailFilter.time = 1e5,
            this.m_TrailSprite3DR1.trailFilter.time = 1e5),
            this.animType = n.dance1
        }
        onAiStart() {
            if (this.EnemyIndex != g.EnemyUi && 0 != this.isEnemy && null != this.aIData) {
                let e = N.getRandomInt(-100, 100);
                this.m_speedAD = -e / 100 * this.m_speedADCoefficient,
                this.m_localRotationEulerY = 35 * -e;
                let t = N.getRandomInt(100, 3e3);
                Laya.timer.once(t, this, () => {
                    this.m_speedAD = 0,
                    this.m_localRotationEulerY = 0
                }
                )
            }
        }
        updataMyDance1() {
            if (1 == this.isEnemy)
                return;
            let e, t = Laya.updateTimer.delta;
            e = new D(this.transform.position.x,this.transform.position.y,this.transform.position.z);
            let i = new D(0,0,1);
            Laya.Vector3.lerp(this.offesetPos, e, t / 1e3 * 4, this.offesetPos),
            O.instance.cameraMove(this.offesetPos, i, t)
        }
        updataMyDance2() {
            if (1 == this.isEnemy)
                return;
            let e = new D(0,0,0);
            this.transform.getForward(e);
            let t = new D(-e.x,-e.y,-e.z).normalize();
            Laya.Vector3.lerp(this.offesetPos, this.transform.position, Laya.updateTimer.delta / 1e3 * 3, this.offesetPos),
            O.instance.cameraEndRoundMove(this.offesetPos, t)
        }
        onUpdate() {
            if (1 == this.isZhanting)
                return;
            if (null == this.player)
                return;
            if (this.EnemyIndex == g.EnemyUi)
                return;
            let e = Laya.updateTimer.delta;
            if (e > 100 && (e = 100),
            this.animType == n.dance1) {
                let e = Le.instance().GetPanel(u.Panel_End_mode2);
                null != e && e.updataUi(),
                this.updataMyDance2();
                let t = 0
                  , i = 0
                  , a = 0;
                return t = this.m_speedW + this.m_speedWAdd,
                (t -= .01) < 0 && (t = 0),
                void this.characterController.move(new D(a,i,t))
            }
            if (this.animType == n.dance2) {
                let e = Le.instance().GetPanel(u.Panel_End_mode2);
                null != e && e.updataUi(),
                this.updataMyDance1();
                let t = 0
                  , i = 0
                  , a = 0;
                t = this.m_speedW + this.m_speedWAdd,
                (t -= .01) < 0 && (t = 0),
                this.characterController.move(new D(a,i,t))
            }
            if (0 == this.isEnemy && (Le.instance().GetPanel(u.Panel_MainMenu).updataUi(this.transform.position),
            we.levelState == t.Shopint && Le.instance().GetPanel(u.Panel_Store).updataUi()),
            this.CalculateRanking(),
            0 == we.instance.isPlayerGame()) {
                let e = Laya.updateTimer.delta;
                return e > 100 && (e = 100),
                void this.UpdateStop(e)
            }
            this.m_speedWAdd - this.m_speedWAddAttenu > 0 && (this.m_speedWAdd -= this.m_speedWAddAttenu),
            this.transform.position.y <= 0 && this.recoveryMove(),
            this.m_localRotationEulerY > 35 ? this.m_localRotationEulerY = 35 : this.m_localRotationEulerY < -35 && (this.m_localRotationEulerY = -35);
            let i = 0
              , a = 0
              , s = this.m_speedAD;
            if (0 == this.isClimb() ? 1 == this.isbClimb && 0 == this.isPropUp && this.play(n.clim) : 0 == this.isbClimb && 0 == this.isPropUp && (1 == this.characterController.isGrounded ? this.play(n.run) : this.play(n.falling)),
            this.isInAir() && this.animType != n.slide && 1 == this.isTouchdown && 0 == this.isPropUp && 0 == this.isbClimb && 1 == this.characterController.isGrounded && this.play(n.run),
            0 == this.isInAir() && this.animType != n.slide && 0 == this.isGetFlip() && 0 == this.isTouchdown && 0 == this.isPropUp && 0 == this.isbClimb && 0 == this.isSideslip && 0 == this.characterController.isGrounded && this.play(n.falling),
            0 == this.isInAir() && null != this.m_BigJumpParticle && (this.m_BigJumpParticle.active = !1),
            1 == this.isSideslip && 1 == this.isNoJunmp() && this.animType != n.onWallRight && this.animType != n.onWallLeft && 0 == this.isPropUp && 0 == this.isbClimb && 0 == this.isTouchdown && (1 == this.SideslipTpye ? (s = 0,
            null != this.m_WallJumpParticleL && (this.m_WallJumpParticleL.active = !0),
            this.play(n.onWallRight)) : (s = 0,
            null != this.m_WallJumpParticleR && (this.m_WallJumpParticleR.active = !0),
            this.play(n.onWallLeft))),
            null != this._partical_yanwu && null != this._partical_yanwu.particleSystem && (this.animType == n.run && 1 == this._partical_yanwu.particleSystem.isPaused ? this._partical_yanwu.particleSystem.play() : this.animType != n.run && this._partical_yanwu.particleSystem.pause()),
            null != this.m_WorldSpeedLine && (this.m_speedWAdd >= .04 ? this.m_WorldSpeedLine.active = !0 : this.m_WorldSpeedLine.active = !1),
            null != this.m_LittleTrailSpeed && (this.m_speedWAdd >= .02 ? this.m_LittleTrailSpeed.active = !0 : this.m_LittleTrailSpeed.active = !1),
            1 == this.isClimb())
                this.characterController.fallSpeed = 0,
                a = this.m_speedWY,
                i = 0,
                this.m_localRotationEulerY = 0,
                s *= this.m_speedADY;
            else if (this.animType == n.cheng)
                this.characterController.fallSpeed = 0,
                a = this.m_speedWCY,
                i = this.m_speedWCX,
                this.m_localRotationEulerY = 0,
                s = 0;
            else if (this.animType == n.onWallRight || this.animType == n.onWallLeft) {
                if (i = this.m_speedW + this.m_speedWAdd,
                this.characterController.fallSpeed = this.m_fallSideslipSpeed,
                this.animType == n.onWallRight && s < 0)
                    return void this.onJump(0, 0, 0, 0);
                if (this.animType == n.onWallLeft && s > 0)
                    return void this.onJump(0, 0, 0, 0)
            } else
                this.animType == n.Idle ? (this.characterController.fallSpeed = 0,
                a = 0,
                i = 0,
                s = 0) : (i = this.m_speedW + this.m_speedWAdd,
                a = 0,
                this.characterController.fallSpeed = this.m_fallSpeed);
            this.player.transform.localRotationEulerY = this.m_localRotationEulerY,
            Laya.updateTimer.currFrame < 35 ? (this.characterController.simulation.maxSubSteps = 60 / Laya.updateTimer.currFrame,
            this.characterController.gravity = new Laya.Vector3(0,this.m_gravity.y,0)) : this.characterController.simulation.maxSubSteps = 1,
            this.characterController.move(new D(s,a,i)),
            this.UpdateStop(e)
        }
        UpdateStop(e) {
            if (this.isEnemy)
                return;
            let t;
            t = this.animType != n.clim ? new D(this.transform.position.x,this.transform.position.y,this.transform.position.z + this._Zoffset) : new D(this.transform.position.x,this.transform.position.y,this.transform.position.z + 3);
            let i = new D(0,0,1);
            Laya.Vector3.lerp(this.offesetPos, t, e / 1e3 * 4, this.offesetPos),
            O.instance.cameraMove(this.offesetPos, i, e)
        }
        huifu() {
            null != this.m_TrailSprite3DL && null != this.m_TrailSprite3DL.trailFilter && (this.m_TrailSprite3DL.trailFilter.time = this.m_TraTime,
            this.m_TrailSprite3DR.trailFilter.time = this.m_TraTime),
            null != this.m_TrailSprite3DL1 && null != this.m_TrailSprite3DL1.trailFilter && (this.m_TrailSprite3DL1.trailFilter.time = this.m_TraTime,
            this.m_TrailSprite3DR1.trailFilter.time = this.m_TraTime)
        }
        closePlayerEffect() {
            this.m_WorldSpeedLine.active = !1,
            this.m_BigJumpParticle.active = !1,
            this.m_LittleTrailSpeed.active = !1,
            this.m_SpeedUpParticle.active = !1
        }
        victory() {
            let e = ne.instance.EndStage;
            null != e.EndPassParticle && Laya.timer.once(1500, this, () => {
                e.EndPassParticle.active = !1,
                e.EndPassParticle.active = !0
            }
            ),
            0 == this.isEnemy && (W.gameplayStop(),
            1 === ne.instance.playerRanking && W.happyTime(),
            C.instance.vibration(h.longVibration)),
            this.animType = n.dance1,
            Laya.timer.once(1e3, this, () => {
                this.characterController.fallSpeed = 0,
                this.characterController.move(new D(0,0,0)),
                this.characterController.jumpSpeed = 0,
                this.characterController.enabled = !1
            }
            ),
            null != this.m_WinParticle && (this.m_WinParticle.active = !0,
            this.m_WinParticle.particleSystem.play(),
            Laya.timer.once(1500, this, this.closePlayerEffect)),
            this.m_speedWAdd /= 2;
            for (let e = 0; e < Ie.playerEnemyList.length; ++e)
                Ie.playerEnemyList[e].stopMove();
            we.instance.LevelComplete()
        }
        zhanting() {
            this.isZhanting = !0,
            this.characterController.fallSpeed = 0,
            this.characterController.jumpSpeed = 0
        }
        kaishi() {
            this.isZhanting = !1,
            this.characterController.fallSpeed = this.m_fallSpeed,
            this.characterController.jumpSpeed = this.m_jumpSpeed
        }
        CalculateRanking() {
            if (0 != this.isEnemy || 1 != this.isvictory) {
                if (1 == this.isEnemy) {
                    let e = 6
                      , t = this.transform.position.z;
                    for (let i = 0; i < Ie.playerEnemyList.length; ++i) {
                        let a = Ie.playerEnemyList[i];
                        0 == a.isvictory && null != a.transform && a.transform.position.z < t && (e -= 1)
                    }
                    this.m_RankingNum = e
                } else {
                    let e = 6
                      , t = this.transform.position.z;
                    for (let i = 0; i < Ie.playerEnemyList.length; ++i) {
                        let a = Ie.playerEnemyList[i];
                        0 == a.isvictory && a.transform && a.transform.position.z < t && (e -= 1)
                    }
                    this.m_RankingNum = e,
                    ne.instance.playerRanking = this.m_RankingNum
                }
                1 == this.m_RankingNum && 1 == this.m_isAiF ? this.m_crowned.active = !0 : this.m_crowned.active = !1
            }
        }
        superSpeed() {
            Ie.useGmo && (this.m_speedWAdd = .05,
            14 == Ie.level ? this.m_speedWAddMax = .08 : this.m_speedWAddMax = .05,
            this.m_speedWAddAttenu = 0,
            this.gameObject.transform.localScale = new Laya.Vector3(3,3,3),
            O.instance.camera.fieldOfView = 100)
        }
        resetSpeed() {
            Ie.useGmo && (this.m_speedWAdd = 0,
            this.m_speedWAddMax = .08,
            this.m_speedWAddAttenu = 2e-5,
            this.gameObject.transform.localScale = new Laya.Vector3(1,1,1),
            O.instance.camera.fieldOfView = 60,
            Ie.useGmo = !1)
        }
        draw() {
            var e = this.gameObject.addChild(new Laya.Sprite3D).addChild(new Laya.PixelLineSprite3D(5e3));
            V.linearMeshCollider(this.characterController.owner, e, Laya.Color.GREEN)
        }
        getSkinIndex() {
            return this._skinIndex
        }
        getSkinType() {
            return this._skinType
        }
    }
    class z extends Laya.Script3D {
        constructor() {
            super()
        }
        onTriggerEnter(e) {
            let t = e.owner.getComponent(F);
            null != t && 0 != t.isEnemy && t.onAiStart()
        }
    }
    class q extends Laya.Script3D {
        constructor() {
            super(),
            this.JumpW = 0
        }
        onTriggerEnter(e) {
            let t = e.owner.getComponent(F);
            null != t && t.onJump(2, this.addSpeed, this.JumpH, this.JumpW)
        }
    }
    class J extends Laya.Script3D {
        constructor() {
            super(),
            this.isStart = !1
        }
        onTriggerEnter(e) {
            if (we.levelState != t.Playing)
                return;
            let i = e.owner.getComponent(F);
            null != i && 1 != this.isStart && i.onTouchdown(this.isRecovery, this.recoveryPos)
        }
        onTriggerExit(e) {
            if (we.levelState != t.Playing)
                return;
            let i = e.owner.getComponent(F);
            null != i && (i.isTouchdown = !1,
            i.onJump(1, 0, 0, 0))
        }
    }
    class H extends Laya.Script3D {
        constructor() {
            super()
        }
        onTriggerEnter(e) {
            console.warn("climb trigger enter"),
            console.log(e.owner.name);
            let t = e.owner.getComponent(F);
            null != t && t.onClimb()
        }
        onTriggerExit(e) {
            let t = e.owner.getComponent(F);
            null != t && t.onEscClimb()
        }
    }
    class Y extends Laya.Script3D {
        constructor() {
            super()
        }
        onTriggerEnter(e) {
            let t = e.owner.getComponent(F);
            null != t && t.onPropUp()
        }
        onTriggerExit(e) {
            let t = e.owner.getComponent(F);
            null != t && t.onEscPropUp()
        }
    }
    class K extends Laya.Script3D {
        constructor() {
            super(),
            this.m_type = 0
        }
        onTriggerEnter(e) {
            let t = e.owner.getComponent(F);
            null != t && t.onSideslip(this.m_type)
        }
        onTriggerExit(e) {
            let t = e.owner.getComponent(F);
            null != t && (t.isSideslip = !1,
            t.animType != n.run && 1 != t.isbClimb && t.onJump(0, 0, 0, 0))
        }
    }
    class X extends Laya.Script3D {
        constructor() {
            super()
        }
        onTriggerEnter(e) {
            let t = e.owner.getComponent(F);
            null != t && t.onEnd()
        }
    }
    class Q extends Laya.Script3D {
        constructor() {
            super()
        }
        onTriggerEnter(e) {
            let t = e.owner.getComponent(F);
            null != t && (t.isSlide = !0,
            Ie.useGmo ? t.onFlip(this.addSpeed) : t.onSlide(this.addSpeed))
        }
        onTriggerExit(e) {
            let t = e.owner.getComponent(F);
            null != t && (Ie.useGmo ? t.isFlip = !1 : t.isSlide = !1,
            t.onRun())
        }
    }
    class Z extends Laya.Script3D {
        constructor() {
            super()
        }
        onTriggerEnter(e) {
            let t = e.owner.getComponent(F);
            null != t && t.onFlip(this.addSpeed)
        }
        onTriggerExit(e) {
            let t = e.owner.getComponent(F);
            null != t && (t.isFlip = !1)
        }
    }
    class $ extends Laya.Script3D {
        constructor() {
            super()
        }
        onTriggerEnter(e) {
            let t = e.owner.getComponent(F);
            null != t && t.speedWAdd(this.addSpeed)
        }
    }
    class ee extends Laya.Script3D {
        constructor() {
            super()
        }
        onTriggerEnter(e) {
            let t = e.owner.getComponent(F);
            null != t && t.onPropUpLimit()
        }
        onTriggerExit(e) {
            let t = e.owner.getComponent(F);
            null != t && t.onEscPropUpLimit()
        }
    }
    class te extends Laya.Script3D {
        constructor() {
            super()
        }
        onTriggerEnter(e) {
            let t = e.owner.getComponent(F);
            null != t && t.onEndMuBu()
        }
    }
    class ie extends Laya.Script3D {
        constructor() {
            super()
        }
        onTriggerEnter(e) {
            let t = e.owner.getComponent(F);
            null != t && t.SlowDown()
        }
    }
    class ae extends Laya.Script3D {
        constructor() {
            super(...arguments),
            this.m_EndMoBu = null,
            this.EnemyPosList = [],
            this.EnemyAutoPosList = []
        }
        onAwake() {
            this.gameObject = this.owner,
            this.stageName = this.gameObject.name,
            this.transform = this.gameObject.transform;
            let e = this.gameObject.getChildByName("confettiLeft");
            null != e && (this.EndPassParticle = e),
            this.init()
        }
        initPos() {
            this.pos = new D(this.transform.position.x,this.transform.position.y,this.transform.position.z),
            this.EnemyPosList.splice(0, this.EnemyPosList.length),
            this.EnemyAutoPosList.splice(0, this.EnemyAutoPosList.length);
            for (let e = 0; e < this.gameObject.numChildren; ++e) {
                let t = this.gameObject.getChildAt(e);
                if ("_EnemyPos" == t.name)
                    for (let e = 0; e < t.numChildren; e++) {
                        let i = t.getChildAt(e)
                          , a = new D(i.transform.position.x,i.transform.position.y,i.transform.position.z);
                        this.EnemyPosList.push(a)
                    }
                else if ("_EnemyAutoPos" == t.name)
                    for (let e = 0; e < t.numChildren; e++) {
                        let i = t.getChildAt(e)
                          , a = new D(i.transform.position.x,i.transform.position.y,i.transform.position.z);
                        this.EnemyAutoPosList.push(a)
                    }
                else {
                    let e = t.getChildByName("Dager");
                    if (null != e)
                        for (let t = 0; t < e.numChildren; t++) {
                            let i = e.getChildAt(t);
                            if ("CollisionTouchdownScript" == i.name && i.getComponent(J)) {
                                let e = i.addComponent(J);
                                if (1 == i.numChildren) {
                                    e.isRecovery = !0;
                                    let t = i.getChildAt(0);
                                    e.recoveryPos = new D(t.transform.position.x,t.transform.position.y,t.transform.position.z)
                                } else
                                    e.isRecovery = !1
                            }
                        }
                }
            }
        }
        init() {
            this.EnemyPosList.splice(0, this.EnemyPosList.length),
            this.EnemyAutoPosList.splice(0, this.EnemyAutoPosList.length);
            for (let e = 0; e < this.gameObject.numChildren; ++e) {
                let t = this.gameObject.getChildAt(e);
                if ("_EnemyPos" == t.name)
                    ;
                else if ("mubu" != t.name || t.getComponent(te)) {
                    let e = t.getChildByName("Ground");
                    if (null != e)
                        for (let t = 0; t < e.numChildren; t++) {
                            let i = e.getChildAt(t);
                            for (let e = 0; e < i.numChildren; ++e) {
                                let t = i.getChildAt(e);
                                null != t.meshRenderer && (t.meshRenderer.receiveShadow = !0)
                            }
                            null != i.meshRenderer && (i.meshRenderer.receiveShadow = !0)
                        }
                    let i = t.getChildByName("Dager");
                    if (null != i)
                        for (let e = 0; e < i.numChildren; e++) {
                            let t = i.getChildAt(e)
                              , a = t.name.split("_")
                              , n = a[0];
                            if ("CollisionJumpScript" != n || t.getComponent(q))
                                if ("CollisionAddSpeedScript" != n || t.getComponent($))
                                    if ("CollisionSlideScript" != n || t.getComponent(Q))
                                        if ("CollisionFlipScript" != n || t.getComponent(Z))
                                            if ("CollisionTouchdownScript" != t.name || t.getComponent(J))
                                                if ("CollisionClimbScript" != t.name || t.getComponent(H))
                                                    if ("CollisionPropUpScript" != t.name || t.getComponent(Y))
                                                        if ("CollisionSideslipRightScript" != t.name || t.getComponent(K))
                                                            if ("CollisionSideslipLeftScript" != t.name || t.getComponent(K))
                                                                "CollisionEndScript" != t.name || t.getComponent(X) ? "CollisionPropUpLimitScript" != t.name || t.getComponent(ee) ? "CollisionSlowDownScript" != t.name || t.getComponent(ie) || t.addComponent(ie) : t.addComponent(ee) : t.addComponent(X);
                                                            else {
                                                                t.addComponent(K).m_type = 0
                                                            }
                                                        else {
                                                            t.addComponent(K).m_type = 1
                                                        }
                                                    else
                                                        t.addComponent(Y);
                                                else
                                                    t.addComponent(H);
                                            else {
                                                let e = t.addComponent(J);
                                                "Start" == this.stageName && (e.isStart = !0)
                                            }
                                        else {
                                            let e = t.addComponent(Z);
                                            2 == a.length ? e.addSpeed = Number(a[1]) : e.addSpeed = 0;
                                            let i = t;
                                            null != i && null != i.meshRenderer && (i.meshRenderer.castShadow = !0)
                                        }
                                    else {
                                        let e = t.addComponent(Q);
                                        2 == a.length ? e.addSpeed = Number(a[1]) : e.addSpeed = 0;
                                        let i = t;
                                        null != i && null != i.meshRenderer && (i.meshRenderer.castShadow = !0)
                                    }
                                else {
                                    let e = t.addComponent($);
                                    2 == a.length ? e.addSpeed = Number(a[1]) : e.addSpeed = 0;
                                    let i = t;
                                    null != i && null != i.meshRenderer && (i.meshRenderer.castShadow = !0)
                                }
                            else {
                                let e = t.addComponent(q);
                                2 == a.length ? (e.addSpeed = Number(a[1]),
                                e.JumpH = 0,
                                e.JumpW = 0) : 3 == a.length ? (e.addSpeed = Number(a[1]),
                                e.JumpH = Number(a[2]),
                                e.JumpW = 0) : 4 == a.length ? (e.addSpeed = Number(a[1]),
                                e.JumpH = Number(a[2]),
                                e.JumpW = Number(a[3])) : (e.addSpeed = 0,
                                e.JumpH = 0,
                                e.JumpW = 0);
                                let i = t;
                                null != i && null != i.meshRenderer && (i.meshRenderer.castShadow = !0)
                            }
                        }
                    let a = t.getChildByName("Adopt");
                    if (null != a)
                        for (let e = 0; e < a.numChildren; e++) {
                            let t = a.getChildAt(e);
                            if (!t.getComponent(z)) {
                                t.getComponent(Laya.PhysicsCollider).isTrigger = !0;
                                t.addComponent(z)
                            }
                        }
                } else
                    t.addComponent(te),
                    this.m_EndMoBu = t,
                    this.m_EndMoBu.active = !1
            }
        }
        isAnimType(e) {
            switch (e) {
            case "run":
                return n.run;
            case "Idle":
                return n.Idle;
            case "onWallRight":
                return n.onWallRight;
            case "onWallLeft":
                return n.onWallLeft;
            case "clim":
                return n.clim;
            case "cheng":
                return n.cheng;
            case "falling":
                return n.falling;
            case "jump":
                return n.jump;
            case "jump2":
                return n.jump2;
            case "flip":
                return n.flip;
            case "jump_cheng":
                return n.jump_cheng;
            case "jump_cheng2":
                return n.jump_cheng2;
            case "slide":
                return n.slide;
            case "fallToRun":
                return n.fallToRun;
            case "fallToLand":
                return n.fallToLand;
            case "roll":
                return n.roll;
            default:
                return n.run
            }
        }
    }
    class ne extends Laya.Script3D {
        constructor() {
            super(...arguments),
            this.AiDataId = "AI1",
            this.mlevelType = 0,
            this.m_LevelAniY = 15
        }
        onAwake() {
            ne.instance = this,
            this.mlevelType = 0;
            let e = Ie.sceneRoot.getChildByName("sea");
            this.seamat = e.meshRenderer.material,
            ve.onLoadShiyong()
        }
        newloadLevel(e, t) {
            this.mlevelType = t;
            let i = 0;
            i = 0 == t ? e >= 50 ? N.getRandomInt(10, 49) : e : e - 50;
            let a = M.LevelDataList[i]
              , n = a.LevelData.split("_")
              , s = n.length
              , l = 0;
            for (let e = 0; e < s; e++) {
                let t = n[e];
                if (t.startsWith("Stage")) {
                    if (null == E.prefabDic[t]) {
                        let e = Laya.loader.getRes(Ie.URL + "res/LayaScene_ObjScene/Conventional/" + t + ".lh");
                        if (null == e)
                            Laya.Sprite3D.load(Ie.URL + "res/LayaScene_ObjScene/Conventional/" + t + ".lh", Laya.Handler.create(this, function(e) {
                                let t = e;
                                t.active = !1,
                                t.addComponent(ae),
                                E.prefabDic[t.name] = t,
                                (l += 1) == s && this.loadLevel(a)
                            }));
                        else {
                            let t = e;
                            t.active = !1,
                            t.addComponent(ae),
                            E.prefabDic[t.name] = t,
                            (l += 1) == s && this.loadLevel(a)
                        }
                    } else
                        l += 1
                }
            }
            l == s && this.loadLevel(a)
        }
        nextloadLevel() {
            let e = M.LevelDataList[(Ie.level + 1) % ne.MaxLevel].LevelData.split("_");
            for (let t = 0; t < e.length; t++) {
                let i = e[t];
                if (i.startsWith("Stage")) {
                    if (null == E.prefabDic[i]) {
                        let e = Laya.loader.getRes(Ie.URL + "res/LayaScene_ObjScene/Conventional/" + i + ".lh");
                        if (null == e)
                            Laya.Sprite3D.load(Ie.URL + "res/LayaScene_ObjScene/Conventional/" + i + ".lh", Laya.Handler.create(this, function(e) {
                                let t = e;
                                t.active = !1,
                                t.addComponent(ae),
                                E.prefabDic[t.name] = t
                            }));
                        else {
                            let t = e;
                            t.active = !1,
                            t.addComponent(ae),
                            E.prefabDic[t.name] = t
                        }
                    }
                }
            }
        }
        newloadSpecialLevel() {
            let e = Ie.specialLevel - 50
              , t = M.LevelDataList[e].LevelData.split("_")
              , i = t.length;
            for (let e = 0; e < i; e++) {
                let i = t[e];
                if (i.startsWith("Stage")) {
                    if (null == E.prefabDic[i]) {
                        let e = Laya.loader.getRes(Ie.URL + "res/LayaScene_ObjScene/Conventional/" + i + ".lh");
                        if (null == e)
                            Laya.Sprite3D.load(Ie.URL + "res/LayaScene_ObjScene/Conventional/" + i + ".lh", Laya.Handler.create(this, function(e) {
                                let t = e;
                                t.active = !1,
                                t.addComponent(ae),
                                E.prefabDic[t.name] = t
                            }));
                        else {
                            let t = e;
                            t.active = !1,
                            t.addComponent(ae),
                            E.prefabDic[t.name] = t
                        }
                    }
                }
            }
        }
        loadLevel(e) {
            this.playerRanking = 1;
            for (let e = 0; e < Ie.sceneRoot.numChildren; e++) {
                let t = Ie.sceneRoot.getChildAt(e);
                (t.name.startsWith("Stage") || t.name.startsWith("End") || t.name.startsWith("Start")) && (E.setPool(t.name, t),
                --e)
            }
            Ie.stageArray.splice(0, Ie.stageArray.length),
            Ie.EnemyPosList.splice(0, Ie.EnemyPosList.length);
            let t = e.LevelData.split("_")
              , i = [];
            null != e.CameraSpeed && (i = e.CameraSpeed.split("_"));
            let a = [];
            null != e.PosString && (a = e.PosString.split("_")),
            this.AiDataId = e.AiDataId,
            this.instantiateObj("Airwall").active = !0;
            let s, l = this.instantiateObj("Start").getComponent(ae);
            l.transform.position = new D(0,0,0),
            l.initPos(),
            l.EnemyPosList.length > 0 && (Ie.EnemyPosList = Ie.EnemyPosList.concat(l.EnemyPosList));
            for (let e = 0; e < t.length; e++) {
                let n = this.instantiateObj(t[e])
                  , l = n.getComponent(ae);
                Ie.stageArray.push(l);
                let o = a[e].split(",")
                  , r = new D(-Number(o[0]),Number(o[1]),Number(o[2]));
                l.transform.localRotationEulerX = 0,
                l.transform.localRotationEulerZ = 0,
                l.transform.localRotationEulerY = 0,
                l.transform.position = r,
                null != l.m_EndMoBu && (l.m_EndMoBu.active = !1),
                l.initPos(),
                2 == e && 0 == l.EnemyAutoPosList.length && console.log("警告。没有发现第3个stage的AI点"),
                null != l.m_EndMoBu && e == t.length - 1 && (l.m_EndMoBu.active = !0),
                e >= t.length - 3 && e != t.length - 1 && (l.gameObject.active = !1);
                let h = new D(l.transform.position.x,l.transform.position.y,l.transform.position.z);
                h.y -= this.m_LevelAniY,
                l.transform.position = h;
                let d = 1;
                e < i.length && (d = Number(i[e]));
                for (let e = 0; e < l.EnemyPosList.length; ++e)
                    Ie.EnemyPosList.push(l.EnemyPosList[e]);
                l.CameraSpeed = d,
                s = l,
                Ie.sceneRoot.addChild(n)
            }
            let o = this.instantiateObj("End").getComponent(ae);
            this.EndStage = o,
            o.gameObject.active = !0;
            let r = a[a.length - 1].split(",")
              , h = new D(-Number(r[0]),Number(r[1]),Number(r[2]));
            if (this.EndPos = h,
            o.transform.position = h,
            null == Ie.player) {
                let e = this.instantiateObj("Player");
                Ie.player = e.getComponent(F),
                Ie.player.isEnemy = !1,
                Ie.player.play(n.Idle),
                Ie.player.playerName = "You",
                Laya.Scene.destroy("LoadingView.scene")
            }
            if (0 == Ie.playerEnemyList.length)
                for (let e = 0; e < 5; ++e) {
                    let t = Ie.playerEnemyList[e];
                    if (null == t) {
                        let i = this.instantiateObj("playerEnemy" + e);
                        (t = null != i.getComponent(F) ? i.getComponent(F) : i.addComponent(F)).EnemyId = e,
                        t.isEnemy = !0,
                        t.play(n.Idle),
                        t.EnemyIndex = g.EnemyLeft,
                        t.playerName = "playerEnemy" + e,
                        Ie.playerEnemyList.push(t)
                    }
                }
            for (let e = 0; e < 5; ++e) {
                let t = Ie.playerEnemyList[e];
                t.init(N.getRandomInt(0, 26), N.getRandomInt(0, 26), 0, !0),
                t.InitPlayerPos(!0),
                t.gameObject.active = !1
            }
            Ie.useShiyong || Ie.player.init(Ie.SkinType, Ie.SkinIndex, 0, !0),
            Ie.player.InitPlayerPos(!0),
            Ie.player.gameObject.active = !0,
            O.instance.transform.position = new D(0,7.616,-3.135),
            O.instance.transform.rotationEuler = new D(-27.048,-180,0),
            null != Ie.player.transform && this.PlayerAni(),
            we.instance.startGame(),
            this.nextloadLevel(),
            this.newloadSpecialLevel(),
            this.InitLevelStageAni()
        }
        PlayerAni() {
            let e = new Laya.Vector3(0,0,0);
            Laya.Vector3.subtract(O.instance.camera.transform.position, Ie.player.transform.position, e),
            O.instance.playerOffset = e,
            O.instance.SetCameraAngle(5, 1.0386, 0, 5),
            Ie.player.offesetPos = new D(Ie.player.transform.position.x,Ie.player.transform.position.y,Ie.player.transform.position.z + 2.8),
            Ie.player._Zoffset = 2.8;
            for (let e = 0; e < Ie.stageArray.length; ++e) {
                let i = Ie.stageArray[e]
                  , a = i.transform.position;
                Laya.Tween.to(a, {
                    y: i.pos.y,
                    update: new Laya.Handler(this,function() {
                        i.transform.position = a
                    }
                    )
                }, 1500, Laya.Ease.quintOut, Laya.Handler.create(this, function() {
                    we.levelState != t.Playing && (we.levelState = t.WaitPlay)
                }))
            }
            for (let e = 2; e < Ie.playerEnemyList.length; ++e) {
                let t = Ie.playerEnemyList[e]
                  , i = t.transform.position;
                Laya.Tween.to(i, {
                    y: t.m_pos.y,
                    update: new Laya.Handler(this,function() {
                        t.transform.position = i
                    }
                    )
                }, 1500, Laya.Ease.quintOut)
            }
        }
        InitLevelStageAni() {
            0 == this.mlevelType ? this.InitFogColor(0) : 100 == Ie.specialLevel || 104 == Ie.specialLevel || 108 == Ie.specialLevel ? this.InitFogColor(1) : 101 == Ie.specialLevel || 105 == Ie.specialLevel || 109 == Ie.specialLevel ? this.InitFogColor(2) : 102 == Ie.specialLevel || 106 == Ie.specialLevel || 110 == Ie.specialLevel ? this.InitFogColor(3) : 103 != Ie.specialLevel && 107 != Ie.specialLevel && 111 != Ie.specialLevel || this.InitFogColor(4)
        }
        InitFogColor(e) {
            let t, i, a, n = .91;
            switch (e) {
            case 0:
                t = new Laya.Vector4(136 / 255,205 / 255,1,1),
                i = new Laya.Vector3(58 / 255,176 / 255,248 / 255),
                a = new Laya.Vector4(23 / 255,128 / 255,189 / 255),
                n = 1;
                break;
            case 4:
                t = new Laya.Vector4(62 / 255,118 / 255,135 / 255,1),
                i = new Laya.Vector3(112 / 255,118 / 255,116 / 255),
                a = new Laya.Vector4(225 / 255,226 / 255,182 / 255),
                n = 1;
                break;
            case 1:
                t = new Laya.Vector4(72 / 255,111 / 255,108 / 255,1),
                i = new Laya.Vector3(72 / 255,111 / 255,108 / 255),
                a = new Laya.Vector4(218 / 255,190 / 255,143 / 255),
                n = 1;
                break;
            case 2:
                t = new Laya.Vector4(128 / 255,116 / 255,92 / 255,1),
                i = new Laya.Vector3(112 / 255,97 / 255,68 / 255),
                a = new Laya.Vector4(43 / 255,66 / 255,107 / 255),
                n = 1;
                break;
            case 3:
                t = new Laya.Vector4(11 / 255,19 / 255,55 / 255,1),
                i = new Laya.Vector3(38 / 255,30 / 255,81 / 255),
                a = new Laya.Vector4(232 / 255,171 / 255,228 / 255),
                n = 1;
                break;
            default:
                t = new Laya.Vector4(136 / 255,205 / 255,1,1),
                i = new Laya.Vector3(126 / 255,211 / 255,1),
                a = new Laya.Vector4(23 / 255,128 / 255,189 / 255),
                n = 1
            }
            let s = Ie.mainScene.skyRenderer.material;
            s.exposure = n,
            Ie.mainScene.skyRenderer.material = s,
            this.seamat.albedoColor = new Laya.Vector4(a.x,a.y,a.z,1),
            Laya.Tween.to(s.tintColor, {
                x: t.x,
                y: t.y,
                z: t.z
            }, 2e3, Laya.Ease.linearNone),
            Laya.Tween.to(Ie.mainScene.fogColor, {
                x: i.x,
                y: i.y,
                z: i.z
            }, 2e3, Laya.Ease.linearNone)
        }
        instantiateObj(e) {
            let t = null;
            return (t = e.startsWith("Stage") ? E.getPool(M.RoadDataDic[e].RoadRes) : E.getPool(e)) && Ie.sceneRoot.addChild(t),
            t
        }
        isSkinType(e) {
            switch (e) {
            case 1:
                return a.Man;
            case 2:
                return a.Fat;
            case 3:
                return a.Muscle;
            case 4:
                return a.Thin;
            default:
                return a.Man
            }
        }
    }
    ne.MaxLevel = 50;
    class se {
        constructor() {
            this.platform = "pc",
            this.platformid = 0,
            this.appid = "37854",
            this.m_OV_isOnDesk = !1,
            this.m_DY_isOnDesk = !0,
            this.m_DY_isOnAwemek = !1,
            this.m_NativeAd = null,
            this.videoPath = null,
            this.qqBlockAd = null,
            this.ttMoreGamesBanner = null
        }
        static get Instance() {
            return null == this._instance && (this._instance = new se),
            this._instance
        }
        InitSDK() {
            let e = {
                wechat: {
                    bannerAdId: "adunit-d9663919b627f70d",
                    interstitialAdId: "adunit-0b608fc3c7b7b1fa",
                    rewardedVideoAdId: "adunit-6f83e551f3c54606"
                },
                oppo: {
                    bannerAdId: "174943",
                    interstitialAdId: "174944",
                    rewardedVideoAdId: "174947",
                    nativeAdId: "194112"
                },
                vivo: {
                    bannerAdId: "7cd31965561e4ee69d4e0928372c6db0",
                    interstitialAdId: "17901ee4ae97408589b9335f1dd210b0",
                    rewardedVideoAdId: "192a22b7214d45aab7f7233329ca9c3a",
                    nativeAdId: "546b01cd6fc54adc8a94440aaedd22fc"
                },
                qq: {
                    bannerAdId: "85563d6039bbe419d8b66ba51353603f",
                    interstitialAdId: "6c82509ecc2fff09f0224f20b1aa1db3",
                    rewardedVideoAdId: "9ea4a55d434fb53f00b420ca553f70c8",
                    boxAdId: "8fd0e8cb940a6f664cedeaaba983dfc5"
                },
                tt: {
                    bannerAdId: "3bc569mvd3n63dbj9b",
                    interstitialAdId: "5500kc0b6621ncdc1b",
                    rewardedVideoAdId: "17g9n310932jeadkil"
                },
                meizu: {
                    bannerAdId: "6xN7DqEd",
                    interstitialAdId: "",
                    rewardedVideoAdId: "IjMeGk4v"
                }
            };
            try {
                Laya.Browser.window.dnsdk.init(this.appid, e)
            } catch (e) {
                console.error(e)
            }
            if (this.platform = se.Instance.getPlatform(),
            console.error("platform:" + this.platform),
            this.platformid = se.Instance.getPlatformID(),
            Laya.Browser.window.dnsdk.log("platform =====" + this.platform + "&&&&&&&&&&platformid =====" + this.platformid),
            Laya.Browser.window.dnsdk.onInit({
                success: function(e) {},
                fail: function(e) {},
                complete: function(e) {}
            }),
            Laya.Browser.window.dnsdk.onDataReceived(function(e) {
                Laya.Browser.window.dnsdk.log(e)
            }),
            "vivo" == this.platform || "oppo" == this.platform)
                Laya.Browser.window.qg.hasShortcutInstalled({
                    success: function(e) {
                        e ? (console.log("已创建"),
                        se.Instance.m_OV_isOnDesk = !0) : (console.log("未创建"),
                        se.Instance.m_OV_isOnDesk = !1)
                    }
                });
            else if ("qq" == this.platform) {
                this.onShareAppMessage(),
                console.log("判断是否是看点渠道");
                var t = Laya.Browser.window.dnsdk.pt.getLaunchOptionsSync();
                if (t) {
                    var i = t.query.via
                      , a = t.query.refer;
                    console.log("via:" + i),
                    console.log("refer:" + a),
                    i && 2086 == i && (Ie.qqKanDian = !0),
                    a && 2103 == a && (Ie.qqKanDian = !0)
                }
            } else if ("tt" == this.platform) {
                var n = Laya.Browser.window.dnsdk.getSystemInfoSync().appName;
                console.log("appName:" + n),
                "Douyin" == n && (Ie.isDouYin = !0,
                console.log("抖音渠道进入：" + Ie.isDouYin),
                Laya.Browser.window.tt.checkFollowAwemeState && Laya.Browser.window.tt.checkFollowAwemeState({
                    success: function(e) {
                        console.log("---- check FollowAwemeState success, res:", e),
                        e.hasFollowed ? se.Instance.m_DY_isOnAwemek = !0 : se.Instance.m_DY_isOnAwemek = !1
                    },
                    fail: function(e) {
                        console.log("---- check fail,", e)
                    },
                    complete: function(e) {
                        console.log("---- check complete, res: ", e)
                    }
                }))
            } else
                "meizu" == this.platform && (console.log("设置Show All 模式"),
                Laya.stage.scaleMode = "showall",
                Laya.Browser.window.mz.getAndroidVersion() <= 25 && (console.log("设置Show All 模式"),
                Laya.stage.scaleMode = "showall"))
        }
        getPlatform() {
            return "pc"
        }
        openBanner() {}
        destroyBanner() {}
        hideBanner() {}
        showBanner() {}
        openInterstitial() {
            if (Ie.isSdk && !Ie.openQQBox) {
                if ("meizu" == se.Instance.platform) {
                    var e = Laya.Browser.window.qg.createInsertAd({
                        adUnitId: "MEGRlKaU"
                    });
                    return e.load(),
                    e.onLoad(function() {
                        console.log("魅族insert 广告加载成功"),
                        e.show()
                    }),
                    void e.onError(function(e) {
                        console.log("魅族insert 广告加载失败"),
                        console.log(e)
                    })
                }
                Laya.Browser.window.dnsdk.openInterstitial({
                    fail: function(e) {
                        console.log("打开插屏失败 : " + JSON.stringify(e)),
                        "qq" == se.Instance.platform ? (se.Instance.openYSQQinterstitial(),
                        Ie.openPaiLian && (Ie.openPaiLian = !1)) : "oppo" == se.Instance.platform ? se.Instance.openYSOPPLEinterstitial() : "vivo" == se.Instance.platform ? se.Instance.openYSVVinterstitial() : "wechat" == se.Instance.platform && Le.instance().OpenUi(u.Panel_WXchaping)
                    },
                    success: function() {
                        console.log("打开插屏成功 "),
                        "oppo" != se.Instance.platform && "vivo" != se.Instance.platform || se.Instance.hideBanner(),
                        Ie.openInterstitial = !0
                    },
                    close: function() {
                        console.log("插屏关闭"),
                        "oppo" != se.Instance.platform && "vivo" != se.Instance.platform || se.Instance.showBanner(),
                        Ie.openInterstitial = !1,
                        Ie.openPaiLian && (Ie.openPaiLian = !1,
                        we.time_game = 0)
                    }
                })
            } else
                console.log("Global.openQQBox:" + Ie.openQQBox)
        }
        openYSinterstitial() {
            "oppo" == this.platform ? this.openYSOPPLEinterstitial() : "qq" == this.platform ? this.openYSQQinterstitial() : "tt" == this.platform || "vivo" == this.platform && this.openYSVVinterstitial()
        }
        openYSQQinterstitial() {}
        openYSOPPLEinterstitial() {}
        openYSVVinterstitial() {
            if (this.m_NativeAd = Laya.Browser.window.dnsdk.getNativeAd(),
            null != this.m_NativeAd) {
                let e = this.m_NativeAd.getData();
                e && (Le.instance().OpenUi(u.Panel_sdk),
                Le.instance().GetPanel(u.Panel_sdk).SetinterstitialRes(e),
                se.Instance.hideBanner())
            }
        }
        destroyInterstitial() {}
        openRewardedVideo(e) {}
        getPlatformID() {
            return 0
        }
        navigateToMiniProgram(e, t, i) {
            Laya.Browser.window.dnsdk.navigateToMiniProgram({
                appId: e,
                path: t,
                extraData: i,
                success: function(e) {
                    console.log("跳转成功~~")
                },
                fail: function() {
                    console.log("跳转失败！！"),
                    "wechat" == se.Instance.platform && Ie.isSdk && Le.instance().OpenUi(u.Panel_Juhe)
                }
            })
        }
        shareAppMessage() {
            let e = "你out了,最新的3D跑酷游戏在这";
            "tt" == this.platform && (e = "无限跑酷,解锁稀有皮肤,挑战高难度动作！"),
            Laya.Browser.window.dnsdk.shareAppMessage({
                imageUrl: Ie.URL + "res/texture/wpfy.jpg",
                title: e,
                query: "id=89&select=2"
            })
        }
        onShareAppMessage() {
            console.log("开启转发"),
            Laya.Browser.window.qq.showShareMenu({
                showShareItems: ["qq", "qzone", "wechatFriends", "wechatMoment"],
                withShareTicket: !1,
                success: () => {
                    console.log("转发开启成功")
                }
                ,
                fail: () => {
                    console.log("转发开启失败")
                }
                ,
                complete: () => {
                    console.log("转发开启结束")
                }
            });
            Laya.Browser.window.qq.onShareAppMessage( () => ({
                title: "你out了，最新的3D跑酷游戏在这",
                imageUrl: Ie.URL + "res/texture/wpfy.jpg"
            }))
        }
        ttCreatMoreGameBtn() {
            if (null == Laya.Browser.window.tt || 1 == Laya.Browser.onIOS)
                return;
            let e = Laya.Browser.window.tt.getSystemInfoSync()
              , t = e.windowWidth / 750;
            this.ttMoreGame = Laya.Browser.window.tt.createMoreGamesButton({
                type: "image",
                image: "ui/ui_gdyx.png",
                style: {
                    left: e.windowWidth - 140 * t,
                    top: e.windowHeight - 712 * t,
                    width: 94 * t * 1.4,
                    height: 93 * t * 1.3
                },
                appLaunchOptions: [{
                    appId: "ttca0ebcb35524af80",
                    query: "foo=bar&baz=qux",
                    extraData: {}
                }],
                onNavigateToMiniGame(e) {
                    console.log("跳转其他小游戏", e)
                }
            }),
            console.log(this.ttMoreGame),
            this.ttMoreGame.onTap( () => {
                console.log("点击更多游戏")
            }
            )
        }
        ttshowMoreGamesModal() {
            null != Laya.Browser.window.tt && 1 != Laya.Browser.onIOS && Laya.Browser.window.tt.showMoreGamesModal({
                appLaunchOptions: [{
                    appId: "ttca0ebcb35524af80",
                    query: "foo=bar&baz=qux",
                    extraData: {}
                }],
                success(e) {},
                fail(e) {
                    console.log("fail", e.errMsg)
                }
            })
        }
        ttShowMoreGame() {
            Laya.Browser.window.tt && 0 == Laya.Browser.onIOS && (this.ttMoreGame ? this.ttMoreGame.show() : this.ttCreatMoreGameBtn())
        }
        ttHideMoreGame() {
            Laya.Browser.window.tt && 0 == Laya.Browser.onIOS && this.ttMoreGame.hide()
        }
        ttRecord() {
            let e = Laya.Browser.window.tt.getGameRecorderManager();
            e.onStart(e => {
                console.log("录屏开始")
            }
            ),
            e.start({
                duration: 45
            }),
            e.onStop(e => {
                console.log("录屏结束"),
                console.log(e.videoPath),
                se.Instance.videoPath = e.videoPath
            }
            )
        }
        ttShareRecord(e) {
            null != this.videoPath && Laya.Browser.window.tt.shareAppMessage({
                channel: "video",
                title: "无限跑酷",
                desc: "无限跑酷,解锁稀有皮肤,挑战高难度动作",
                imageUrl: "",
                templateId: "",
                query: "",
                extra: {
                    videoPath: this.videoPath,
                    videoTopics: ["#无限跑酷,解锁稀有皮肤,挑战高难度动作"]
                },
                success() {
                    console.log("分享视频成功"),
                    e && e(!0)
                },
                fail(t) {
                    console.log("分享视频失败"),
                    e && e(!1)
                }
            })
        }
        addToDeskTop() {
            console.log("点击创建桌面图标"),
            Laya.Browser.window.qg.installShortcut({
                success: function() {
                    console.log("创建成功"),
                    se.Instance.m_OV_isOnDesk = !0
                },
                fail: function(e) {
                    console.log("创建失败："),
                    console.log(e)
                },
                complete: function() {
                    console.log("创建完成")
                }
            })
        }
        qqCreateAppBox() {
            Laya.Browser.window.qq && (Le.instance().OpenUi(u.Panel_Mask),
            Laya.Browser.window.dnsdk.openBoxAd({
                fail: function(e) {
                    console.log("openBoxAd fail:", e),
                    Ie.openQQBox = !1,
                    Le.instance().destroyUi(u.Panel_Mask)
                },
                success: function() {
                    console.log("openBoxAd success"),
                    Ie.openQQBox = !0,
                    se.Instance.qqDestroyBlickAD()
                },
                close: function() {
                    console.log("openBoxAd close"),
                    Ie.openQQBox = !1,
                    Le.instance().destroyUi(u.Panel_Mask)
                }
            }))
        }
        Juhe() {
            Le.instance().OpenUi(u.Panel_Juhe)
        }
        qqCreateBlockAd(e=11) {
            var t = Laya.Browser.window.qq;
            t && t.createBlockAd ? (console.log("创建积木广告"),
            this.qqBlockAd = t.createBlockAd({
                adUnitId: "65d91e1bd7ac93da2e6eadba49ca03f4",
                style: {
                    left: e,
                    top: 120
                },
                size: 5,
                orientation: "landscape"
            }),
            this.qqBlockAd.onResize(e => {
                console.log("积木广告的宽：" + e.width),
                console.log("积木广告的高：" + e.height),
                console.log("x:" + this.qqBlockAd.style.left),
                console.log("width:" + Laya.Browser.window.dnsdk.getSystemInfoSync().screenWidth)
            }
            ),
            this.qqBlockAd.onLoad( () => {
                console.log("积木广告Load成功"),
                this.qqBlockAd.show()
            }
            ),
            this.qqBlockAd.onError(e => {
                console.error("Error:", e.errMsg),
                console.error("ErrorCode:", e.errCode),
                1009 == e.errCode && this.qqCreateBlockAd(16)
            }
            )) : console.error("无法创建积木广告")
        }
        qqDestroyBlickAD() {
            this.qqBlockAd && this.qqBlockAd.destroy()
        }
        addToDeskDY() {
            console.log("点击创建桌面图标"),
            Laya.Browser.window.tt.addShortcut ? (console.log("桌面图标 有API"),
            Laya.Browser.window.tt.addShortcut({
                success: function(e) {
                    console.log("抖音桌面图标创建成功"),
                    se.Instance.m_DY_isOnDesk = !0
                },
                fail: function(e) {
                    console.error("抖音桌面图标创建失败："),
                    console.error(e.errMsg)
                }
            })) : console.log("桌面图标 没有API")
        }
        openAwemeUserProfile() {
            console.log("点击关注有理图标"),
            Laya.Browser.window.tt.openAwemeUserProfile ? Laya.Browser.window.tt.openAwemeUserProfile({
                success: function(e) {
                    console.log("---- open success, res: ", e),
                    e.hasFollowed ? se.Instance.m_DY_isOnAwemek || (se.Instance.m_DY_isOnAwemek = !0,
                    Le.instance().GetPanel(u.Panel_MainMenu).closeGzylView(),
                    se.Instance.popTips("Subscribed !"),
                    se.Instance.rewardAwemeUserProfile()) : (se.Instance.m_DY_isOnAwemek = !1,
                    Le.instance().GetPanel(u.Panel_MainMenu).openGzylView())
                },
                fail: function(e) {
                    se.Instance.popTips("Please log in to your account!"),
                    console.log("---- open fail, err: ", e)
                },
                complete: function(e) {
                    console.log("---- open complete, res: ", e)
                }
            }) : console.log("点击关注 没有API")
        }
        rewardAwemeUserProfile() {
            Ie.Unlock(0, 39),
            Ie.Unlock(0, 40),
            Ie.Unlock(1, 1),
            Ie.Unlock(1, 2),
            Ie.Unlock(2, 23),
            Ie.Unlock(2, 26)
        }
        popTips(e) {
            Laya.Scene.open("Tips.scene", !1, e)
        }
        ttCreateMoreGamesBanner() {
            if (null == Laya.Browser.window.tt || 1 == Laya.Browser.onIOS)
                return;
            let e = Laya.Browser.window.tt.getSystemInfoSync();
            if ("XiGua" != e.appName && Laya.Browser.window.tt.createMoreGamesBanner) {
                let a = e.windowWidth / 750;
                var t = .1 * e.windowWidth
                  , i = e.windowHeight - 200 * a;
                this.ttMoreGamesBanner = Laya.Browser.window.tt.createMoreGamesBanner({
                    style: {
                        left: t,
                        top: i,
                        width: .8 * e.windowWidth,
                        height: 135 * a
                    },
                    appLaunchOptions: [{
                        appId: "ttXXXXXX",
                        query: "foo=bar&baz=qux",
                        extraData: {}
                    }]
                })
            }
        }
        ttMoreGamesBannerShow() {
            this.ttMoreGamesBanner && this.ttMoreGamesBanner.show()
        }
        ttMoreGamesBannerHide() {
            console.log(this.ttMoreGamesBanner),
            this.ttMoreGamesBanner && this.ttMoreGamesBanner.hide()
        }
    }
    se._instance = null;
    class le extends v {
        constructor() {
            if (super(),
            this._view = fgui.UIPackage.createObject("Runman", "Store").asCom,
            this._view.setSize(fgui.GRoot.inst.width, fgui.GRoot.inst.height),
            this.m_btn_return = this._view.getChild("btn_return").asButton,
            this.m_btn_return.onClick(this, this.MyClose),
            this.m_GlodText = this._view.getChild("money").asCom.getChild("text_number").asLabel,
            this._list = this._view.getChild("list").asList,
            this._list.on(fgui.Events.CLICK_ITEM, this, this.onListClickItem),
            this.m_holder = this._view.getChild("holderLarge").asGraph,
            this.m_ControllerbuyType = this._view.getController("buyType"),
            this.m_Controllertag = this._view.getController("tag"),
            this._Btn_Tab_1 = this._view.getChild("btn_men").asButton,
            this._Btn_Tab_1.onClick(this, this.Tab, [0]),
            this._Btn_Tab_2 = this._view.getChild("btn_tuowei").asButton,
            this._Btn_Tab_2.onClick(this, this.Tab, [1]),
            this._Btn_Tab_3 = this._view.getChild("btn_tuan").asButton,
            this._Btn_Tab_3.onClick(this, this.Tab, [2]),
            this._btn_ad_c = this._view.getChild("btn_buy_jinbi").asButton,
            this._btn_ad_c.onClick(this, this.buy, [0]),
            this._buy_number1 = this._btn_ad_c.getChild("n4").asLabel,
            this._btn_buy_bisai = this._view.getChild("btn_buy_bisai").asButton,
            this._btn_buy_bisai.onClick(this, this.btn_go),
            this._btn_buy_shipin = this._view.getChild("btn_buy_shipin").asButton,
            this._btn_buy_shipin.onClick(this, this.buy_shipin),
            this._btn_buy_shipintitle = this._btn_buy_shipin.getChild("title").asLabel,
            this.m_AddFail = this._view.getTransition("AddFail"),
            "qq" == se.Instance.platform) {
                let e = this._view.getChild("btn_cebianQQ").asButton;
                e.visible = !0,
                e.onClick(this, se.Instance.qqCreateAppBox)
            }
            fgui.GRoot.inst.addChild(this._view),
            Laya.timer.loop(1e3, this, this.updataUi)
        }
        duihuan() {
            Le.instance().OpenUi(u.Panel_duihuan)
        }
        Btn_cebian() {
            null == Laya.Browser.window.dnsdk.data.pushData.grouppageList || Laya.Browser.window.dnsdk.data.pushData.grouppageList.length
        }
        ListAnimation() {}
        renderListItem2(e, t) {
            let i = t.asCom.getChild("listitem").asList;
            i.itemRenderer = Laya.Handler.create(this, this.renderListItem_item2, [e], !1),
            i.numItems = 3,
            i.on(fgui.Events.CLICK_ITEM, this, this.onListClickItem2, [e])
        }
        renderListItem_item2(e, t, i) {
            let a = i.asCom
              , n = t + 3 * e;
            n %= this.m_listLenth,
            a.getChild("n0").asLoader.url = Laya.Browser.window.dnsdk.data.pushData.grouppageList[n].icon,
            a.getChild("n1").asTextField.text = Laya.Browser.window.dnsdk.data.pushData.grouppageList[n].gameName
        }
        onListClickItem2(e, t) {}
        InitUi() {
            this.InitSDKUI(),
            Ie.UiSubScene.active = !0,
            Ie.mainScene.active = !1,
            this._view.visible = !0,
            we.levelState = t.Shopint,
            this.m_GlodText.text = Ie.Gold.toString();
            let e = Ie.SkinIndex + 1;
            this.selcetIndex = 0,
            this.Tab(0),
            T.instance.GetOrInitCamera(0, "Player" + e, this.m_holder, 0, Ie.SkinIndex)
        }
        InitSDKUI() {}
        OnLoad(e) {}
        MyClose() {
            T.instance.CloseCamera(),
            this._list.removeChildrenToPool(),
            this.CloseUi(),
            ve._C_shiyong.visible || 0 != ne.instance.mlevelType || W.showBanner(),
            we.levelState = t.WaitPlay,
            1 == ne.instance.mlevelType && (Le.instance().GetPanel(u.Panel_MainMenu).isOpen = !0),
            Le.instance().OpenUi(u.Panel_MainMenu),
            1 == ne.instance.mlevelType && Le.instance().GetPanel(u.Panel_MainMenu).m_GameMode2.play(),
            Ie.mainScene.active = !0,
            Ie.useShiyong || Ie.player.init(Ie.SkinType, Ie.SkinIndex, Ie.playerNum, !1)
        }
        btn_go() {
            T.instance.CloseCamera(),
            this.CloseUi(),
            Ie.mainScene.active = !0,
            Le.instance().OpenUi(u.Panel_MainMenu),
            Le.instance().GetPanel(u.Panel_MainMenu).btn_richangReal(),
            Ie.player.init(Ie.SkinType, Ie.SkinIndex, Ie.playerNum, !1),
            we.levelState = t.Waiting,
            Laya.timer.once(100, this, () => {
                this._list.removeChildrenToPool()
            }
            )
        }
        showRenderIcon() {}
        buy_shipin() {
            Ie.isSdk ? W.rewarded(e => {
                e ? this.buy_shipinReal() : this.m_AddFail.play()
            }
            ) : this.buy_shipinReal()
        }
        buy_shipinReal() {
            Ie.AddVideoNum(100 * this.unlockType + this.selcetIndex);
            let e = M.shopDataDic[this.unlockType][this.selcetIndex];
            if (null == e)
                return;
            let t = Ie.GetVideoNum(100 * this.unlockType + this.selcetIndex);
            t >= Number(e.UseVarSub) ? this.buy(1) : this.RefreshShiPinBtn(t, Number(e.UseVarSub))
        }
        RefreshShiPinBtn(e, t) {
            this._btn_buy_shipintitle.text = e + "/" + t
        }
        buy(e) {
            let t = M.shopDataDic[this.unlockType][this.selcetIndex];
            if (null != t) {
                if (0 == Ie.IsUnlock(this.unlockType, this.selcetIndex)) {
                    let i = !1;
                    if (0 == e && t.unlockShopType == y.Gold) {
                        let e = Number(t.UseVar);
                        Ie.Gold >= e && (i = !0)
                    } else if (1 == e) {
                        Ie.GetVideoNum(100 * this.unlockType + this.selcetIndex) >= Number(t.UseVarSub) && (i = !0)
                    }
                    if (1 == i) {
                        t.unlockShopType == y.Gold && 1 != e && (Ie.Gold -= Number(t.UseVar),
                        this.m_GlodText.text = Ie.Gold.toString()),
                        this.unlockType == _.StoreType ? (Ie.SkinType = this.selcetIndex,
                        Ie.saveScore()) : this.unlockType == _.StoreIndex ? (Ie.SkinIndex = this.selcetIndex,
                        Ie.saveScore()) : this.unlockType == _.DanceIndex && (Ie.DanceIndex = this.selcetIndex,
                        Ie.saveScore()),
                        Ie.Unlock(this.unlockType, this.selcetIndex),
                        this.setSelectTextBtn();
                        let i = this._list.getChildAt(this.clickIndexTemp).asCom;
                        i.controllers[1].setSelectedIndex(2),
                        (i = this._list.getChildAt(this.isUseIndexTemp).asCom).controllers[1].setSelectedIndex(0),
                        this.isUseIndex = this.selcetIndex,
                        this.isUseIndexTemp = this.clickIndexTemp
                    }
                }
            }
        }
        Refresh_n15() {
            for (let e = 0; e < this._list.numChildren; e++) {
                let t = M.shopDataDic[this.unlockType][e];
                if (null != t) {
                    if (0 == Ie.IsUnlock(this.unlockType, e) && t.unlockShopType == y.Gold) {
                        let i = Number(t.UseVar)
                          , a = this._list.getChildAt(e).asCom;
                        Ie.Gold >= i ? a.getChild("n15").visible = !0 : a.getChild("n15").visible = !1
                    }
                }
            }
        }
        Tab(e) {
            e == _.StoreType ? T.instance.CameraPlayerAni("showback") : e == _.StoreIndex ? T.instance.CameraPlayerAni("dance") : e == _.DanceIndex && T.instance.CameraPlayerAni("dance"),
            this.unlockType = e,
            this.m_Controllertag.setSelectedIndex(e),
            this.InitList(e),
            this.m_ControllerbuyType.setSelectedIndex(2)
        }
        InitListItem(e) {
            let t = we.instance.specialLevelData[Ie.specialLevel];
            if (null == t)
                return;
            let i = e.getChild("loader").asLoader;
            100 == Ie.specialLevel || 104 == Ie.specialLevel || 108 == Ie.specialLevel ? i.url = fgui.UIPackage.getItemURL("Runman", "logosmll_3") : 101 == Ie.specialLevel || 105 == Ie.specialLevel || 109 == Ie.specialLevel ? i.url = fgui.UIPackage.getItemURL("Runman", "logosmll_1") : 102 == Ie.specialLevel || 106 == Ie.specialLevel || 110 == Ie.specialLevel ? i.url = fgui.UIPackage.getItemURL("Runman", "logosmll_2") : 103 != Ie.specialLevel && 107 != Ie.specialLevel && 111 != Ie.specialLevel || (i.url = fgui.UIPackage.getItemURL("Runman", "logosmll_0"));
            let a = M.shopDataDic[t.type1][t.index1];
            e.getChild("loader1").asLoader.url = fgui.UIPackage.getItemURL("Runman", a.IconUrl),
            a = M.shopDataDic[t.type2][t.index2],
            e.getChild("loader2").asLoader.url = fgui.UIPackage.getItemURL("Runman", a.IconUrl),
            a = M.shopDataDic[t.type3][t.index3];
            let n = Number(a.IconUrl)
              , s = e.getChild("holderLogo").asGraph;
            T.instance.GetOrInitCamera(100, "Player" + n, s, this.m_Controllertag.selectedIndex, Ie.SkinIndex)
        }
        InitList(e) {
            this._list.removeChildrenToPool();
            let t = 0;
            if (0 == e) {
                let i = this._list.addItemFromPool(fgui.UIPackage.getItemURL("Runman", "store_com_bisai")).asCom;
                i.name = "biaotou";
                let a = i.getChild("btn_go").asButton;
                this.m_time = i.getChild("time").asLabel,
                a.enabled = Ie.level >= 2,
                a.onClick(this, this.btn_go),
                this.InitListItem(i);
                let n = !1;
                for (let e = 27; e <= 56; ++e)
                    if (e >= 27 && e <= 56) {
                        if (1 == Ie.IsUnlock(this.unlockType, e)) {
                            n = !0;
                            break
                        }
                    }
                if (1 == n) {
                    this._list.addItemFromPool(fgui.UIPackage.getItemURL("Runman", "store_com_jp")).asCom.name = "biaoti"
                }
                t = this.addItem(27, 56, e);
                let s = this._list.addItemFromPool(fgui.UIPackage.getItemURL("Runman", "store_com_zi")).asCom;
                s.name = "biaoti",
                t = this.addItem(0, 15, e),
                s.getChild("n4").asLabel.text = t + "/15";
                let l = this._list.addItemFromPool(fgui.UIPackage.getItemURL("Runman", "store_com_lan")).asCom;
                l.name = "biaoti",
                t = this.addItem(15, 18, e),
                l.getChild("n4").asLabel.text = t + "/3";
                let o = this._list.addItemFromPool(fgui.UIPackage.getItemURL("Runman", "store_com_cheng")).asCom;
                o.name = "biaoti",
                t = this.addItem(18, 21, e),
                o.getChild("n4").asLabel.text = t + "/3";
                let r = this._list.addItemFromPool(fgui.UIPackage.getItemURL("Runman", "store_com_hui")).asCom;
                r.name = "biaoti",
                t = this.addItem(21, 24, e),
                r.getChild("n4").asLabel.text = t + "/3";
                let h = this._list.addItemFromPool(fgui.UIPackage.getItemURL("Runman", "store_com_lv")).asCom;
                h.name = "biaoti",
                t = this.addItem(24, 27, e),
                h.getChild("n4").asLabel.text = t + "/3",
                this._list.addItemFromPool(fgui.UIPackage.getItemURL("Runman", "store_com_empty")).asCom.name = "biaoxia"
            } else if (1 == e) {
                let i = this._list.addItemFromPool(fgui.UIPackage.getItemURL("Runman", "store_com_bisai")).asCom;
                i.name = "biaotou";
                let a = i.getChild("btn_go").asButton;
                this.m_time = i.getChild("time").asLabel,
                a.onClick(this, this.btn_go);
                let n = this._list.addItemFromPool(fgui.UIPackage.getItemURL("Runman", "store_com_zi")).asCom;
                n.name = "biaoti",
                t = this.addItem(0, 8, e),
                1 == Ie.IsUnlock(1, 20) && (t = this.addItem(20, 21, e)),
                n.getChild("n4").asLabel.text = t + "/8";
                let s = this._list.addItemFromPool(fgui.UIPackage.getItemURL("Runman", "store_com_lan")).asCom;
                s.name = "biaoti",
                t = this.addItem(8, 11, e),
                s.getChild("n4").asLabel.text = t + "/3";
                let l = this._list.addItemFromPool(fgui.UIPackage.getItemURL("Runman", "store_com_cheng")).asCom;
                l.name = "biaoti",
                t = this.addItem(11, 14, e),
                l.getChild("n4").asLabel.text = t + "/3";
                let o = this._list.addItemFromPool(fgui.UIPackage.getItemURL("Runman", "store_com_hui")).asCom;
                o.name = "biaoti",
                t = this.addItem(14, 17, e),
                o.getChild("n4").asLabel.text = t + "/3";
                let r = this._list.addItemFromPool(fgui.UIPackage.getItemURL("Runman", "store_com_lv")).asCom;
                r.name = "biaoti",
                t = this.addItem(17, 20, e),
                r.getChild("n4").asLabel.text = t + "/3",
                this._list.addItemFromPool(fgui.UIPackage.getItemURL("Runman", "store_com_empty")).asCom.name = "biaoxia"
            } else if (2 == e) {
                let i = this._list.addItemFromPool(fgui.UIPackage.getItemURL("Runman", "store_com_bisai")).asCom;
                i.name = "biaotou";
                let a = i.getChild("btn_go").asButton;
                this.m_time = i.getChild("time").asLabel,
                a.onClick(this, this.btn_go);
                let n = this._list.addItemFromPool(fgui.UIPackage.getItemURL("Runman", "store_com_zi")).asCom;
                n.name = "biaoti",
                t = this.addItem(0, 15, e),
                1 == Ie.IsUnlock(2, 27) && (t = this.addItem(27, 28, e)),
                n.getChild("n4").asLabel.text = t + "/15";
                let s = this._list.addItemFromPool(fgui.UIPackage.getItemURL("Runman", "store_com_lan")).asCom;
                s.name = "biaoti",
                t = this.addItem(15, 18, e),
                s.getChild("n4").asLabel.text = t + "/3";
                let l = this._list.addItemFromPool(fgui.UIPackage.getItemURL("Runman", "store_com_cheng")).asCom;
                l.name = "biaoti",
                t = this.addItem(18, 21, e),
                l.getChild("n4").asLabel.text = t + "/3";
                let o = this._list.addItemFromPool(fgui.UIPackage.getItemURL("Runman", "store_com_hui")).asCom;
                o.name = "biaoti",
                t = this.addItem(21, 24, e),
                o.getChild("n4").asLabel.text = t + "/3";
                let r = this._list.addItemFromPool(fgui.UIPackage.getItemURL("Runman", "store_com_lv")).asCom;
                r.name = "biaoti",
                t = this.addItem(24, 27, e),
                r.getChild("n4").asLabel.text = t + "/3",
                this._list.addItemFromPool(fgui.UIPackage.getItemURL("Runman", "store_com_empty")).asCom.name = "biaoxia"
            }
        }
        addItem(e, t, i) {
            let a = 0;
            for (e = e; e < t; ++e) {
                let t = M.shopDataDic[this.unlockType][e];
                if (null != t) {
                    if (e >= 27 && e <= 56) {
                        if (0 == Ie.IsUnlock(this.unlockType, e))
                            continue
                    }
                    let n = this._list.addItemFromPool(fgui.UIPackage.getItemURL("Runman", "store_com_item")).asCom;
                    if (n.name = "item_" + e,
                    n.controllers[0].setSelectedIndex(0),
                    0 == i) {
                        n.getChild("loder").asLoader.visible = !1;
                        let e = n.getChild("loader_picture").asLoader;
                        e.visible = !0,
                        e.url = fgui.UIPackage.getItemURL("Runman", "picture_" + t.IconUrl)
                    } else {
                        let e = n.getChild("loder").asLoader;
                        e.url = fgui.UIPackage.getItemURL("Runman", t.IconUrl),
                        e.visible = !0,
                        n.getChild("holderItem").asGraph.visible = !1,
                        n.getChild("loader_picture").asLoader.visible = !1
                    }
                    let s = Ie.IsUnlock(this.unlockType, e);
                    s > 0 && (a += 1);
                    let l = this.isUse(this.unlockType, e);
                    1 == l && (this.isUseIndex = e,
                    this.selcetIndex = e,
                    this.clickIndexTemp = this._list.getChildIndex(n),
                    this.isUseIndexTemp = this.clickIndexTemp,
                    this.isUseIndex1 = this.clickIndexTemp),
                    1 == l ? n.controllers[1].setSelectedIndex(2) : 0 == s ? this.selcetIndex == e ? n.controllers[1].setSelectedIndex(4) : n.controllers[1].setSelectedIndex(0) : n.controllers[1].setSelectedIndex(1)
                }
            }
            return a
        }
        setSelectTextBtn() {
            let e = M.shopDataDic[this.unlockType][this.selcetIndex];
            if (null != e) {
                if (0 == Ie.IsUnlock(this.unlockType, this.selcetIndex)) {
                    let t = Number(e.lockType);
                    if (t >= 2)
                        return void this.m_ControllerbuyType.setSelectedIndex(2);
                    if (this.m_ControllerbuyType.setSelectedIndex(t),
                    e.unlockShopType == y.Gold) {
                        let t = Number(e.UseVar);
                        this._buy_number1.text = t.toString(),
                        Ie.Gold < t ? this._btn_ad_c.enabled = !1 : this._btn_ad_c.enabled = !0
                    } else
                        e.unlockShopType == y.level ? this._btn_buy_bisai.enabled = Ie.level >= 2 : e.unlockShopType == y.video || this.m_ControllerbuyType.setSelectedIndex(2);
                    if (0 == t) {
                        let t = Number(e.UseVar);
                        this._buy_number1.text = t.toString(),
                        Ie.Gold < t ? this._btn_ad_c.enabled = !1 : this._btn_ad_c.enabled = !0
                    }
                    {
                        let t = Ie.GetVideoNum(100 * this.unlockType + this.selcetIndex);
                        this._btn_buy_shipintitle.text = t + "/" + e.UseVarSub
                    }
                } else
                    this.m_ControllerbuyType.setSelectedIndex(2)
            }
        }
        onListClickItem(e) {
            let t = e.name.split("_");
            if (2 != t.length)
                return;
            let i = this._list.getChildIndex(e)
              , a = Number(t[1])
              , n = !1
              , s = this.isUse(this.unlockType, a)
              , l = Ie.IsUnlock(this.unlockType, a);
            if (a == this.selcetIndex) {
                let t = e.asCom;
                return void (1 == s ? (t.controllers[1].setSelectedIndex(2),
                this.isUseIndexTemp = this.clickIndexTemp,
                this.isUseIndex = a) : 0 == l ? this.selcetIndex == a ? t.controllers[1].setSelectedIndex(4) : t.controllers[1].setSelectedIndex(0) : this.selcetIndex == a ? t.controllers[1].setSelectedIndex(2) : t.controllers[1].setSelectedIndex(1))
            }
            let o = e.asCom;
            if (0 == l)
                o.controllers[1].setSelectedIndex(4);
            else if (this.isUseIndex != a) {
                o.controllers[1].setSelectedIndex(2),
                0 == Ie.IsUnlock(this.unlockType, this.isUseIndexTemp) ? this._list.getChildAt(this.isUseIndexTemp).asCom.controllers[1].setSelectedIndex(0) : this._list.getChildAt(this.isUseIndexTemp).asCom.controllers[1].setSelectedIndex(1),
                this._list.getChildAt(this.isUseIndex1).asCom.controllers[1].setSelectedIndex(1),
                this.isUseIndexTemp = i,
                this.isUseIndex1 = i,
                this.isUseIndex = a,
                n = !0
            }
            {
                let e = Ie.IsUnlock(this.unlockType, this.selcetIndex)
                  , t = this._list.getChildAt(this.clickIndexTemp).asCom;
                0 == e ? t.controllers[1].setSelectedIndex(0) : 1 == n ? t.controllers[1].setSelectedIndex(1) : t.controllers[1].setSelectedIndex(2)
            }
            if (this.clickIndexTemp = i,
            this.selcetIndex = a,
            this.unlockType == _.StoreType) {
                let e = M.shopDataDic[_.StoreIndex][Ie.SkinIndex];
                1 == n && (Ie.SkinType = a,
                Ie.saveScore()),
                T.instance.UpdatePlayerStoreType("Player" + e.IconUrl, a, 0)
            } else if (this.unlockType == _.StoreIndex) {
                let e = M.shopDataDic[this.unlockType][this.selcetIndex];
                T.instance.GetOrInitCamera(0, "Player" + e.IconUrl, this.m_holder, this.m_Controllertag.selectedIndex, this.selcetIndex),
                1 == n && (Ie.SkinIndex = a,
                Ie.saveScore())
            } else
                this.unlockType == _.DanceIndex && (T.instance.updateDanceIndex(a, 0, Ie.SkinIndex),
                1 == n && (Ie.DanceIndex = a,
                Ie.saveScore()));
            this.setSelectTextBtn()
        }
        isUse(e, t) {
            return e == _.StoreIndex ? t == Ie.SkinIndex : e == _.DanceIndex ? t == Ie.DanceIndex : e == _.StoreType ? t == Ie.SkinType : void 0
        }
        isUseUnlock(e) {
            if (e.unlockShopType == y.Gold) {
                let t = Number(e.UseVar);
                return Ie.Gold >= t
            }
            if (e.unlockShopType == y.level) {
                let t = Number(e.UseVar);
                return Ie.length >= t
            }
            return !1
        }
        static isUseUnloc1k(e) {
            if (e.unlockShopType == y.Gold) {
                let t = Number(e.UseVar);
                return Ie.Gold >= t
            }
            if (e.unlockShopType == y.level) {
                let t = Number(e.UseVar);
                return Ie.length >= t
            }
            return !1
        }
        TabIsUnlock(e) {
            for (let t = 0; t < 28; ++t) {
                if (0 == Ie.IsUnlock(e, t)) {
                    let i = M.shopDataDic[e][t];
                    if (null != i) {
                        if (1 == this.isUseUnlock(i))
                            return !0
                    }
                }
            }
            return !1
        }
        static TabIsUnlock1(e) {
            for (let t = 0; t < 28; ++t) {
                if (0 == Ie.IsUnlock(e, t)) {
                    let i = M.shopDataDic[e][t];
                    if (null != i) {
                        if (1 == this.isUseUnloc1k(i))
                            return !0
                    }
                }
            }
            return !1
        }
        updataUi() {
            let e = Date.parse((new Date).toDateString()) + 864e5 - (new Date).getTime()
              , t = e / 1e3 / 60 / 60
              , i = e - 1e3 * (t = Math.floor(t)) * 60 * 60
              , a = i;
            i = i / 1e3 / 60,
            a -= 1e3 * (i = Math.floor(i)) * 60,
            a /= 1e3,
            a = Math.floor(a);
            let n = t.toString()
              , s = i.toString()
              , l = a.toString();
            1 == n.length && (n = "0" + t),
            1 == s.length && (s = "0" + i),
            1 == l.length && (l = "0" + a),
            this.m_time.text = n + ":" + s + ":" + l
        }
    }
    class oe extends v {
        constructor() {
            super(),
            this.index = 0,
            this.m_thanskY = -1,
            this._view = fgui.UIPackage.createObject("Runman", "Panel_End_mode1").asCom,
            this._view.setSize(fgui.GRoot.inst.width, fgui.GRoot.inst.height),
            this.m_mignciText = this._view.getChild("mignciText").asLabel,
            this.m_mingciText2 = this._view.getChild("mingciText2").asLabel,
            this.m_level = this._view.getChild("level").asLabel,
            this.m_EndBtn = this._view.getChild("btn_lingqu").asButton,
            this.m_EndBtn.onClick(this, () => {
                console.log("Button clicked reward"),
                this.LevelEnd(!1)
            }
            ),
            this.m_EndBtnContinue = this._view.getChild("btn_continue").asButton,
            this.m_EndBtnContinue.onClick(this, () => {
                console.log("Button clicked continue"),
                this.LevelEnd(!0)
            }
            ),
            this.keyDownFn = this.keyDownWindow.bind(this),
            this.m_text2 = this._view.getChild("text2").asLabel,
            this.m_text1 = this._view.getChild("text1").asLabel,
            this.m_End = this._view.getTransition("End"),
            this.m_addFail = this._view.getTransition("AddFail"),
            this.m_btn_Text = this.m_EndBtn.getChild("text").asLabel,
            this.m_coinNumText = this.m_EndBtn.getChild("text2").asLabel,
            this.m_continue_Text = this.m_EndBtnContinue.getChild("btn_continue").asCom.getChild("text").asLabel,
            this.m_coinText = this._view.getChild("coin").asCom.getChild("text_number").asLabel,
            this.m_btn_3bei = this._view.getChild("btn_3bei").asButton,
            this.m_btn_3bei.onClick(this, this.Initbei3),
            this.m_btn_noThanks = this._view.getChild("btn_nothanks").asButton,
            this.m_btn_noThanks.onClick(this, this.btn_noThanks_click),
            se.Instance.platform,
            this.m_Platformcontroller = this._view.getController("platfrom"),
            this.m_area_Interactive = this._view.getChild("n14").asGroup,
            this.m_btn_feed = this._view.getChild("btn_feed").asButton,
            this.m_loder = this.m_btn_feed.getChild("loader").asLoader,
            this.m_btn_feed.onClick(this, this.Btn_Feed_Click),
            this.SDKUIAwake(),
            fgui.GRoot.inst.addChild(this._view)
        }
        keyDownWindow(e) {
            console.log("continue");
            let t = e.keyCode;
            t !== Laya.Keyboard.ENTER && t !== Laya.Keyboard.SPACE || this.m_EndBtnContinue.visible && this.LevelEnd(!0)
        }
        SDKUIAwake() {
            let e = se.Instance.platform;
            if ("qq" == e) {
                let e = this._view.getChild("btn_cebianQQ").asButton;
                e.y = 500,
                e.visible = !0,
                e.onClick(this, se.Instance.qqCreateAppBox)
            } else
                "wechat" == e || ("oppo" == e ? this._view.getChild("btn_lingqu_shipin").asButton.onClick(this, this.wallAdd3bei) : "vivo" == e && this._view.getChild("btn_lingqu_shipin").asButton.onClick(this, this.wallAdd3bei))
        }
        InitSDKUI() {}
        RefreshList() {}
        RemoveList() {}
        ListAnimation() {}
        renderListItem(e, t) {
            let i = t.asCom.getChild("listitem").asList;
            i.itemRenderer = Laya.Handler.create(this, this.renderListItem_item, [e], !1),
            i.numItems = 3,
            i.on(fgui.Events.CLICK_ITEM, this, this.onListClickItem, [e])
        }
        renderListItem_item(e, t, i) {
            let a = i.asCom
              , n = t + 3 * e;
            n %= this.m_listLenth,
            a.getChild("n0").asLoader.url = Laya.Browser.window.dnsdk.data.pushData.grouppageList[n].icon,
            a.getChild("n1").asTextField.text = Laya.Browser.window.dnsdk.data.pushData.grouppageList[n].gameName
        }
        onListClickItem(e, t) {}
        Btn_cebian() {
            null == Laya.Browser.window.dnsdk.data.pushData.grouppageList || Laya.Browser.window.dnsdk.data.pushData.grouppageList.length < 1 || Laya.timer.clear(this, this.ListAnimation2)
        }
        ListAnimation2() {}
        renderListItem2(e, t) {
            let i = t.asCom.getChild("listitem").asList;
            i.itemRenderer = Laya.Handler.create(this, this.renderListItem_item2, [e], !1),
            i.numItems = 3,
            i.on(fgui.Events.CLICK_ITEM, this, this.onListClickItem2, [e])
        }
        renderListItem_item2(e, t, i) {
            let a = i.asCom
              , n = t + 3 * e;
            n %= this.m_listLenth,
            a.getChild("n0").asLoader.url = Laya.Browser.window.dnsdk.data.pushData.grouppageList[n].icon,
            a.getChild("n1").asTextField.text = Laya.Browser.window.dnsdk.data.pushData.grouppageList[n].gameName
        }
        onListClickItem2(e, t) {}
        InitUi() {
            this.InitSDKUI(),
            Laya.timer.once(2500, this, this.RefreshList),
            this.m_btn_noThanks.visible = !1,
            this.SetPlatFromPanel(),
            this._view.visible = !0,
            this.m_btn_3bei.selected = !0,
            this.m_coinText.text = Ie.Gold.toString(),
            window.addEventListener("keydown", this.keyDownFn),
            this.m_mignciText.text = ne.instance.playerRanking + Ie.nth(ne.instance.playerRanking),
            this.m_mingciText2.text = ne.instance.playerRanking + Ie.nth(ne.instance.playerRanking),
            console.log(this.m_mingciText2.text);
            let e = Ie.level + 1;
            this.m_level.text = e + "/" + 100 * Math.ceil(e / 100),
            1 == ne.instance.playerRanking ? (this.m_text1.visible = !0,
            this.m_text2.visible = !1,
            this.m_coinNumText.text = "100",
            this.m_btn_Text.text = 1 == this.m_btn_3bei.selected ? "Get" : "Continue",
            this.m_continue_Text.text = "Continue") : (this.m_text1.visible = !1,
            this.m_text2.visible = !0,
            this.m_coinNumText.text = "50",
            this.m_btn_Text.text = 1 == this.m_btn_3bei.selected ? "Get" : "Try again",
            this.m_continue_Text.text = "Try again"),
            this.Initbei3(),
            this.m_End.play(),
            "oppo" != se.Instance.platform ? se.Instance.showBanner() : this.ShowOppoFeed(),
            Laya.timer.once(2e3, this, () => {
                W.showBanner()
            }
            ),
            Ie.isSdk ? Laya.timer.once(3800, this, () => {
                se.Instance.openYSinterstitial(),
                Laya.Browser.window.tt && Laya.Browser.window.tt.getGameRecorderManager().stop(),
                Laya.timer.once(2e3, this, () => {
                    this.m_btn_noThanks.visible = !0
                }
                )
            }
            ) : Laya.timer.once(5800, this, () => {
                this.m_btn_noThanks.visible = !0,
                Laya.Browser.window.tt && Laya.Browser.window.tt.getGameRecorderManager().stop()
            }
            )
        }
        SetPlatFromPanel() {
            this.m_Platformcontroller.selectedIndex = 0
        }
        Btn_Chuanjianzhuomian_Click() {
            Laya.Browser.window.qg && Laya.Browser.window.qg.installShortcut({
                success: function() {
                    Le.instance().GetPanel(u.Panel_End_mode1).Chuanjianzhuomian_reward()
                },
                fail: function(e) {},
                complete: function() {}
            })
        }
        Chuanjianzhuomian_reward() {
            Ie.Gold += 50,
            Ie.saveScore(),
            this.m_Platformcontroller.selectedIndex = 5
        }
        btn_noThanks_click() {
            this.CloseMode1Panel()
        }
        LevelEnd(e=!1) {
            console.log(e),
            window.removeEventListener("keydown", this.keyDownFn),
            e ? W.midroll( () => {
                this.AddWard()
            }
            ) : W.rewarded(e => {
                e ? this.AddWard() : (this._view.getChild("n30").asLabel.text = "Ad loading failed",
                this.m_addFail.play())
            }
            )
        }
        wallAdd3bei() {
            0 == Ie.isSdk ? this.AddWard(!0) : W.rewarded(e => {
                e ? this.AddWard(!0) : (this._view.getChild("n30").asLabel.text = "Ad loading failed",
                this.m_addFail.play(),
                this.AddWard(!0))
            }
            )
        }
        CloseMode1Panel() {
            W.destroyBanner(),
            this.RemoveList(),
            this.CloseUi(),
            "oppo" == se.Instance.platform ? (Ie.autoPopHtui = !0,
            console.log("开启自动弹出"),
            this.CloseOppoFeed()) : "qq" == se.Instance.platform && se.Instance.qqDestroyBlickAD(),
            Le.instance().OpenUi(u.Panel_MainMenu),
            ne.instance.newloadLevel(Ie.level, 0),
            "wechat" == se.Instance.platform ? Le.instance().OpenUi(u.Panel_Juhe) : se.Instance.platform
        }
        AddWard(e=!1) {
            (1 == this.m_btn_3bei.selected || e) && (1 == ne.instance.playerRanking ? Ie.Gold += 200 : Ie.Gold += 100,
            Ie.saveScore()),
            this.CloseMode1Panel()
        }
        Initbei3() {
            1 == this.m_btn_3bei.selected ? 1 == ne.instance.playerRanking ? (this.m_coinNumText.text = "300",
            this.m_btn_Text.text = "Get",
            this.m_continue_Text.text = "Continue") : (this.m_coinNumText.text = "150",
            this.m_btn_Text.text = "Get",
            this.m_continue_Text.text = "Try again") : 1 == ne.instance.playerRanking ? (this.m_coinNumText.text = "100",
            this.m_btn_Text.text = "Continue",
            this.m_continue_Text.text = "Continue") : (this.m_coinNumText.text = "50",
            this.m_btn_Text.text = "Try again",
            this.m_continue_Text.text = "Try again")
        }
        ShowOppoFeed() {
            if (se.Instance.m_NativeAd = Laya.Browser.window.dnsdk.getNativeAd(),
            null != se.Instance.m_NativeAd) {
                let e = se.Instance.m_NativeAd.getData();
                e && e.adList.length > 0 && (this.m_loder.url = e.adList[0].imgUrlList[0],
                Laya.timer.once(3500, this, () => {
                    this.m_btn_feed.visible = !0,
                    se.Instance.m_NativeAd.show()
                }
                ),
                se.Instance.hideBanner())
            }
        }
        Btn_Feed_Click() {
            se.Instance.m_NativeAd.click()
        }
        CloseOppoFeed() {
            se.Instance.showBanner(),
            se.Instance.m_NativeAd && se.Instance.m_NativeAd.close()
        }
    }
    class re extends v {
        constructor() {
            super(),
            this.m_beforPos = -1,
            this._view = fgui.UIPackage.createObject("Runman", "Panel_End_mode2").asCom,
            this._view.setSize(fgui.GRoot.inst.width, fgui.GRoot.inst.height),
            this.keyDownFn = this.keyDownWindow.bind(this),
            this.m_timeText = this._view.getChild("timeText").asLabel,
            this.m_specialLevelLoader1 = this._view.getChild("jiangli_hui").asLoader,
            this.m_specialLevelLoader2 = this._view.getChild("jiangli_zi").asLoader,
            this.m_specialLevelLoader3 = this._view.getChild("holder").asGraph,
            this.m_specialLevelLoader4 = this._view.getChild("jiangli_cheng").asLoader,
            this.m_get1 = this._view.getChild("get1").asCom,
            this.m_get2 = this._view.getChild("get2").asCom,
            this.m_get3 = this._view.getChild("get3").asCom,
            this.m_RankTime = this._view.getChild("n35").asLabel,
            this.m_btn_onceVedio = this._view.getChild("btn_onceVedio").asButton,
            this.m_btn_onceVedio.onClick(this, this.specialLevel),
            this._view.getChild("btn_onceCoin").onClick(this, this.jinbiAgain),
            this.m_btn_noThanks = this._view.getChild("btn_noThanks").asButton,
            this.m_btn_noThanks.onClick(this, this.LevelEnd),
            this.m_mode2Progress = this._view.getChild("mode2Progress").asProgress,
            this.m_m_mode2ProgressText = this.m_mode2Progress.getChild("n4").asLabel,
            this.m_End = this._view.getTransition("End_mode1"),
            this.m_addFail = this._view.getTransition("AddFail"),
            this.m_coinText = this._view.getChild("coin").asCom.getChild("text_number").asLabel,
            se.Instance.platform,
            this.SDKUIAwake(),
            fgui.GRoot.inst.addChild(this._view)
        }
        keyDownWindow(e) {
            let t = e.keyCode;
            t !== Laya.Keyboard.ENTER && t !== Laya.Keyboard.SPACE || this.m_btn_noThanks.visible && this.LevelEnd()
        }
        SDKUIAwake() {
            if ("qq" == se.Instance.platform) {
                let e = this._view.getChild("btn_cebianQQ").asButton;
                e.visible = !0,
                e.onClick(this, se.Instance.qqCreateAppBox)
            }
        }
        InitUi() {
            this.InitSDKUI(),
            this.m_btn_noThanks.visible = !1,
            this._view.visible = !0,
            this.SetPlatFromPanel(),
            window.addEventListener("keydown", this.keyDownFn),
            Ie.Gold >= 500 ? (this.m_End.setValue("zugou", !0),
            this.m_End.setValue("mianfei", !1)) : (this.m_End.setValue("zugou", !1),
            this.m_End.setValue("mianfei", !0));
            let e = we.instance.specialLevelData[Ie.specialLevel];
            if (null == e)
                return;
            this.m_coinText.text = Ie.Gold.toString();
            let t = Ie.GetRanking(Ie.specialLevel)
              , i = M.shopDataDic[e.type1][e.index1];
            t > 75 ? (this.m_specialLevelLoader1.asLoader.url = fgui.UIPackage.getItemURL("Runman", "coin"),
            this.m_get1.asCom.visible = 0 == Ie.specialGold1) : (this.m_specialLevelLoader1.asLoader.url = fgui.UIPackage.getItemURL("Runman", i.IconUrl),
            this.m_get1.asCom.visible = t > 75),
            i = M.shopDataDic[e.type2][e.index2],
            t > 90 ? (this.m_specialLevelLoader2.asLoader.url = fgui.UIPackage.getItemURL("Runman", "coin"),
            this.m_get2.asCom.visible = 0 == Ie.specialGold2) : (this.m_specialLevelLoader2.asLoader.url = fgui.UIPackage.getItemURL("Runman", i.IconUrl),
            this.m_get2.asCom.visible = t > 90),
            i = M.shopDataDic[e.type3][e.index3];
            let a = Number(i.IconUrl);
            t > 99 ? (this.m_specialLevelLoader4.visible = !0,
            this.m_specialLevelLoader3.visible = !1,
            this.m_get3.asCom.visible = 0 == Ie.specialGold3) : (this.m_specialLevelLoader4.visible = !1,
            this.m_specialLevelLoader3.visible = !0,
            T.instance.GetOrInitCamera(100, "Player" + a, this.m_specialLevelLoader3, 0),
            this.m_get3.asCom.visible = t > 99);
            let n = 0;
            t >= 100 && (t = 100),
            n = t >= 99 ? 100 : t >= 80 ? .75 * t : t > 65 ? .48 * t : .35 * t,
            this.m_mode2Progress.value = n,
            this.m_m_mode2ProgressText.text = t.toFixed(2) + "%",
            this.m_RankTime.text = t.toFixed(2) + "%",
            this.m_End.play(),
            se.Instance.showBanner(),
            Laya.timer.once(2e3, this, () => {
                W.showBanner(W.BANNER_POSITION.BOTTOM)
            }
            ),
            Laya.timer.once(5e3, this, () => {
                this.m_btn_noThanks.visible = !0,
                "tt" == se.Instance.platform ? Laya.Browser.window.tt.getGameRecorderManager().stop() : "oppo" == se.Instance.platform && (se.Instance.openYSinterstitial(),
                Laya.Browser.window.tt && Laya.Browser.window.tt.getGameRecorderManager().stop(),
                Laya.timer.once(2e3, this, () => {
                    this.m_btn_noThanks.visible = !0
                }
                ))
            }
            )
        }
        InitSDKUI() {}
        SetPlatFromPanel() {
            Laya.Browser.onVVMiniGame ? Laya.Browser.window.qg.hasShortcutInstalled({
                success: function(e) {
                    e ? (console.log("已创建"),
                    Le.instance().GetPanel(u.Panel_End_mode2).hideAddTodeskBtn()) : (console.log("未创建"),
                    Le.instance().GetPanel(u.Panel_End_mode2).showAddTodeskBtn())
                }
            }) : Laya.Browser.onQGMiniGame && Laya.Browser.window.qg.hasShortcutInstalled({
                success: function(e) {
                    1 == e ? Le.instance().GetPanel(u.Panel_End_mode2).hideAddTodeskBtn() : Le.instance().GetPanel(u.Panel_End_mode2).showAddTodeskBtn()
                },
                fail: function(e) {},
                complete: function() {}
            })
        }
        Btn_cebian() {
            null == Laya.Browser.window.dnsdk.data.pushData.grouppageList || Laya.Browser.window.dnsdk.data.pushData.grouppageList.length
        }
        ListAnimation2() {}
        renderListItem2(e, t) {
            let i = t.asCom.getChild("listitem").asList;
            i.itemRenderer = Laya.Handler.create(this, this.renderListItem_item2, [e], !1),
            i.numItems = 3,
            i.on(fgui.Events.CLICK_ITEM, this, this.onListClickItem2, [e])
        }
        renderListItem_item2(e, t, i) {
            let a = i.asCom
              , n = t + 3 * e;
            n %= this.m_listLenth,
            a.getChild("n0").asLoader.url = Laya.Browser.window.dnsdk.data.pushData.grouppageList[n].icon,
            a.getChild("n1").asTextField.text = Laya.Browser.window.dnsdk.data.pushData.grouppageList[n].gameName
        }
        onListClickItem2(e, t) {}
        btn_share() {}
        Btn_Chuanjianzhuomian_Click() {
            Laya.Browser.window.qg && Laya.Browser.window.qg.installShortcut({
                success: function() {
                    Le.instance().GetPanel(u.Panel_End_mode2).Chuanjianzhuomian_reward()
                },
                fail: function(e) {},
                complete: function() {}
            })
        }
        Chuanjianzhuomian_reward() {
            Ie.Gold += 50,
            Ie.saveScore(),
            this.hideAddTodeskBtn()
        }
        hideAddTodeskBtn() {
            -1 == this.m_beforPos && (this.m_beforPos = this.m_btn_noThanks.y - 30,
            this.m_btn_noThanks.y = this.m_beforPos)
        }
        showAddTodeskBtn() {}
        LevelEnd() {
            window.removeEventListener("keydown", this.keyDownFn),
            W.midroll( () => {
                this.LevelEndReal()
            }
            )
        }
        LevelEndReal() {
            this.CloseUi(),
            W.destroyBanner(),
            Le.instance().OpenUi(u.Panel_MainMenu),
            Le.instance().GetPanel(u.Panel_MainMenu).m_GameMode1.play(),
            ne.instance.newloadLevel(Ie.level, 0),
            "wechat" == se.Instance.platform && Ie.isSdk ? Le.instance().OpenUi(u.Panel_Juhe) : se.Instance.platform
        }
        specialLevel() {
            window.removeEventListener("keydown", this.keyDownFn),
            W.rewarded(e => {
                e ? this.specialLevelReal() : this.m_addFail.play()
            }
            )
        }
        specialLevelReal() {
            this.CloseUi(),
            W.destroyBanner(),
            Le.instance().OpenUi(u.Panel_MainMenu),
            Le.instance().GetPanel(u.Panel_MainMenu).btn_richang(),
            Ie.mianfei = 0,
            w.setItem("mianfei", Ie.mianfei.toString()),
            ne.instance.newloadLevel(Ie.specialLevel, 1),
            "wechat" == se.Instance.platform && Ie.isSdk ? Le.instance().OpenUi(u.Panel_Juhe) : se.Instance.platform
        }
        jinbiAgain() {
            window.removeEventListener("keydown", this.keyDownFn),
            Ie.Gold -= 500,
            Ie.saveScore(),
            this.CloseUi(),
            Le.instance().OpenUi(u.Panel_MainMenu),
            Le.instance().GetPanel(u.Panel_MainMenu).btn_richang(),
            Ie.mianfei = 0,
            w.setItem("mianfei", Ie.mianfei.toString()),
            ne.instance.newloadLevel(Ie.specialLevel, 1),
            "wechat" == se.Instance.platform && Ie.isSdk ? Le.instance().OpenUi(u.Panel_Juhe) : se.Instance.platform
        }
        updataUi() {
            let e = Date.parse((new Date).toDateString()) + 864e5 - (new Date).getTime()
              , t = e / 1e3 / 60 / 60
              , i = e - 1e3 * (t = Math.floor(t)) * 60 * 60
              , a = i;
            i = i / 1e3 / 60,
            a -= 1e3 * (i = Math.floor(i)) * 60,
            a /= 1e3,
            a = Math.floor(a);
            let n = t.toString()
              , s = i.toString()
              , l = a.toString();
            1 == n.length && (n = "0" + t),
            1 == s.length && (s = "0" + i),
            1 == l.length && (l = "0" + a),
            this.m_timeText.text = n + ":" + s + ":" + l
        }
    }
    class he extends v {
        constructor() {
            super(),
            this.m_isfist = !0,
            this._view = fgui.UIPackage.createObject("Runman", "Panel_Juhe").asCom,
            this._view.setSize(fgui.GRoot.inst.width, fgui.GRoot.inst.height),
            this.m_List_shu = this._view.getChild("list_shu").asList,
            this.m_List_shu.setVirtualAndLoop(),
            this.m_List_heng = this._view.getChild("list_heng").asList,
            this.m_List_heng.setVirtualAndLoop(),
            this._btn_return = this._view.getChild("btn_return").asButton,
            this._btn_jixu = this._view.getChild("btn_jixu").asButton,
            this._btn_return.onClick(this, this.CloseMoreGamePane),
            this._btn_jixu.onClick(this, this.Btn_jixu),
            fgui.GRoot.inst.addChild(this._view)
        }
        ListAnimation() {
            this.m_List_shu.scrollPane.posY += 1.5,
            this.m_List_heng.scrollPane.posX += 1.5
        }
        renderListItem(e, t) {
            let i = t.asCom.getChild("list_item").asList;
            i.itemRenderer = Laya.Handler.create(this, this.renderListItem_item, [e], !1),
            i.numItems = 2,
            i.on(fgui.Events.CLICK_ITEM, this, this.onListClickItem, [e])
        }
        renderListItem_item(e, t, i) {
            let a = i.asCom
              , n = t + 2 * e;
            n %= this.m_hotgameList.length,
            a.getChild("loader").asLoader.url = this.m_hotgameList[n].icon,
            a.getChild("name").asTextField.text = this.m_hotgameList[n].gameName,
            a.getChild("dec").asTextField.text = this.m_hotgameList[n].gameIntroduce
        }
        onListClickItem(e, t) {
            let i = this.m_List_shu.itemIndexToChildIndex(e)
              , a = this.m_List_shu.getChildAt(i).asCom.getChild("list_item").asCom.getChildIndex(t) + 2 * e;
            a %= this.m_hotgameList.length,
            console.log(a),
            console.log(this.m_hotgameList[a].gameName),
            se.Instance.navigateToMiniProgram(this.m_hotgameList[a].pushAppID, this.m_hotgameList[a].openPath, this.m_hotgameList[a].extraData)
        }
        renderListItem_item2(e, t) {
            let i = t.asCom;
            e %= this.m_fungameList.length,
            i.getChild("n0").asLoader.url = this.m_fungameList[e].icon
        }
        onListClickItem2(e) {
            let t = this.m_List_heng.getChildIndex(e)
              , i = this.m_List_heng.childIndexToItemIndex(t);
            i %= this.m_fungameList.length,
            console.log(i),
            console.log(this.m_fungameList[i].gameName),
            se.Instance.navigateToMiniProgram(this.m_fungameList[i].pushAppID, this.m_fungameList[i].openPath, this.m_fungameList[i].extraData)
        }
        InitUi() {
            if (this._btn_return.visible = !1,
            Laya.timer.once(2e3, this, () => {
                this._btn_return.visible = !0
            }
            ),
            this.m_List_shu.visible = !1,
            null == Laya.Browser.window.dnsdk.data || null == Laya.Browser.window.dnsdk.data.pushData)
                return;
            this.m_hotgameList = Laya.Browser.window.dnsdk.data.pushData.hotgameList,
            this.m_fungameList = Laya.Browser.window.dnsdk.data.pushData.fungameList;
            let e = this.m_hotgameList.length;
            e > 0 && (this.m_List_shu.itemRenderer = Laya.Handler.create(this, this.renderListItem, null, !1),
            this.m_List_shu.numItems = e,
            this.m_List_shu.scrollToView(0),
            this.m_List_heng.itemRenderer = Laya.Handler.create(this, this.renderListItem_item2, null, !1),
            this.m_List_heng.on(fgui.Events.CLICK_ITEM, this, this.onListClickItem2),
            this.m_List_heng.numItems = 2 * this.m_fungameList.length,
            this.m_List_heng.scrollToView(0),
            Laya.timer.loop(50, this, this.ListAnimation)),
            this._view.visible = !0,
            this.m_isfist ? Laya.timer.once(300, this, () => {
                this.m_List_shu.visible = !0
            }
            ) : this.m_List_shu.visible = !0,
            this.m_isfist = !1,
            this._view.sortingOrder = 1e3
        }
        CloseMoreGamePane() {
            this.m_hotgameList.length > 0 && (Laya.timer.clear(this, this.ListAnimation),
            this.m_List_shu.numItems = 0),
            this.CloseUi(),
            "wechat" == se.Instance.platform && Ie.isSdk && se.Instance.openInterstitial()
        }
        Btn_jixu() {
            let e = N.getRandomInt(0, this.m_fungameList.length - 1);
            se.Instance.navigateToMiniProgram(this.m_fungameList[e].pushAppID, this.m_fungameList[e].openPath, this.m_fungameList[e].extraData)
        }
    }
    class de extends v {
        constructor() {
            super(),
            this._view = fgui.UIPackage.createObject("Runman", "Panel_sdk").asCom,
            this._view.setSize(fgui.GRoot.inst.width, fgui.GRoot.inst.height),
            this.m_btn_close = this._view.getChild("btn_close").asButton,
            this.m_btn_close.onClick(this, this.CloseSdkPanel),
            this.m_btn_closeOppo = this._view.getChild("btn_closeOppo").asButton,
            this.m_btn_closeOppo.onClick(this, this.CloseSdkPanel),
            this.m_guanggaoBtn = this._view.getChild("btn_guanggao").asButton,
            this.m_loder = this.m_guanggaoBtn.getChild("loader").asLoader,
            this._view.getChild("btn_guanggao").asButton.onClick(this, this.openGuanggao),
            this.InitSDKAwake(),
            fgui.GRoot.inst.addChild(this._view)
        }
        InitSDKAwake() {
            if ("vivo" == se.Instance.platform) {
                let e = this._view.getChild("btn_xiazaivivo").asButton;
                e.visible = !0,
                e.onClick(this, this.openGuanggao),
                this.m_guanggaoBtn.width = 640,
                this.m_guanggaoBtn.height = 322
            } else if ("oppo" == se.Instance.platform) {
                let e = this._view.getChild("btn_xiazaioppo").asButton;
                e.visible = !0,
                e.onClick(this, this.openGuanggao),
                this.m_guanggaoBtn.width = 512,
                this.m_guanggaoBtn.height = 512,
                this.m_btn_close.visible = !1,
                this.m_btn_closeOppo.visible = !0
            }
        }
        SetinterstitialRes(e) {
            this._view.visible = !1,
            this.m_res = e,
            e && e.adList.length > 0 && (this.m_loder.url = e.adList[0].imgUrlList[0],
            this._view.visible = !0,
            se.Instance.m_NativeAd.show(),
            se.Instance.hideBanner(),
            Laya.timer.loop(200, this, this.CloseBanner))
        }
        CloseBanner() {
            se.Instance.hideBanner()
        }
        InitUi() {
            this._view.visible = !1,
            this._view.sortingOrder = 1001
        }
        openGuanggao() {
            se.Instance.m_NativeAd.click()
        }
        CloseSdkPanel() {
            this.CloseUi(),
            Laya.timer.clear(this, this.CloseBanner),
            se.Instance.showBanner(),
            se.Instance.m_NativeAd.close()
        }
    }
    class ce extends v {
        constructor() {
            super(),
            this._view = fgui.UIPackage.createObject("Runman", "Panel_Kaiping").asCom,
            this._view.setSize(fgui.GRoot.inst.width, fgui.GRoot.inst.height),
            this.m_List_shu = this._view.getChild("list_shu").asList,
            this.m_List_shu.setVirtualAndLoop(),
            this._view.getChild("btn_kaiping_close").onClick(this, this.CloseMoreGamePane),
            fgui.GRoot.inst.addChild(this._view)
        }
        ListAnimation() {
            this.m_List_shu.scrollPane.posY += 1.5
        }
        renderListItem(e, t) {
            let i = t.asCom.getChild("list_item").asList;
            i.itemRenderer = Laya.Handler.create(this, this.renderListItem_item, [e], !1),
            i.numItems = 3,
            i.on(fgui.Events.CLICK_ITEM, this, this.onListClickItem, [e])
        }
        renderListItem_item(e, t, i) {
            let a = i.asCom
              , n = t + 3 * e;
            n %= this.moregameList.length,
            a.getChild("loader").asLoader.url = this.moregameList[n].icon,
            a.getChild("name").asTextField.text = this.moregameList[n].gameName
        }
        onListClickItem(e, t) {
            let i = this.m_List_shu.itemIndexToChildIndex(e)
              , a = this.m_List_shu.getChildAt(i).asCom.getChild("list_item").asCom.getChildIndex(t) + 3 * e;
            a %= this.moregameList.length,
            console.log(a),
            console.log(this.moregameList[a].gameName),
            se.Instance.navigateToMiniProgram(this.moregameList[a].pushAppID, this.moregameList[a].openPath, this.moregameList[a].extraData)
        }
        InitUi() {
            if (null == Laya.Browser.window.dnsdk.data || null == Laya.Browser.window.dnsdk.data.pushData)
                return;
            this.moregameList = Laya.Browser.window.dnsdk.data.pushData.moregameList;
            let e = this.moregameList.length;
            e > 0 && (this.m_List_shu.itemRenderer = Laya.Handler.create(this, this.renderListItem, null, !1),
            this.m_List_shu.numItems = e,
            this.m_List_shu.scrollToView(0),
            Laya.timer.loop(50, this, this.ListAnimation)),
            this._view.visible = !0,
            this._view.sortingOrder = 1e3
        }
        CloseMoreGamePane() {
            this.moregameList.length > 0 && (Laya.timer.clear(this, this.ListAnimation),
            this.m_List_shu.numItems = 0),
            this.CloseUi()
        }
    }
    class me extends v {
        constructor() {
            super(),
            this._view = fgui.UIPackage.createObject("Runman", "Panel_WXchaping").asCom,
            this._view.setSize(fgui.GRoot.inst.width, fgui.GRoot.inst.height),
            this._view.getChild("btn_WXicon").asButton.onClick(this, this.jujue),
            this._view.getChild("btn_wx_jieshou").asButton.onClick(this, this.jieshou),
            this._firendLoader = this._view.getChild("loder_friend").asCom.getChild("loader").asLoader,
            this._gameLoader = this._view.getChild("loader_game").asCom.getChild("loader").asLoader,
            this._text = this._view.getChild("text").asLabel,
            fgui.GRoot.inst.addChild(this._view)
        }
        InitUi() {
            this.m_moreList = Laya.Browser.window.dnsdk.data.pushData.moregroupList,
            this.m_plaqueList = Laya.Browser.window.dnsdk.data.pushData.plaqueList,
            null != this.m_moreList && this.m_moreList.length > 0 && (this._firendLoader.url = this.m_moreList[0].icon,
            this._gameLoader.url = this.m_plaqueList[0].icon,
            this._text.text = this.m_plaqueList[0].gameName,
            this._view.visible = !0,
            this._view.sortingOrder = 1001)
        }
        jieshou() {
            se.Instance.navigateToMiniProgram(this.m_plaqueList[0].pushAppID, this.m_plaqueList[0].openPath, this.m_plaqueList[0].extraData),
            this.CloseUi()
        }
        jujue() {
            this.CloseUi()
        }
    }
    class pe extends v {
        constructor() {
            super(),
            this._view = fgui.UIPackage.createObject("Runman", "Panel_duihuan").asCom,
            this._view.setSize(fgui.GRoot.inst.width, fgui.GRoot.inst.height),
            this._view.getChild("com_duihuan").asCom.getChild("btn_qx").asButton.onClick(this, this.CloseUi),
            this._view.getChild("com_duihuan").asCom.getChild("btn_qd").asButton.onClick(this, this.btn_ok),
            this._txt_shuru = this._view.getChild("com_duihuan").asCom.getChild("txt_shuru").asLabel,
            this.tishi = this._view.getChild("tishi").asCom,
            fgui.GRoot.inst.addChild(this._view)
        }
        InitUi() {
            this._view.visible = !0,
            this.tishi.visible = !1
        }
        btn_ok() {
            let e = 0
              , t = this._txt_shuru.text
              , i = N.stringToBytes(t);
            for (let e = 0; e < i.length; ++e)
                i[e] >= 97 && (i[e] -= 32);
            if ("IU888" == (t = N.byteToString(i)) || "778778" == t ? e = 28 : "DD111" == t || "101010" == t ? e = 29 : "KE333" == t || "123123" == t ? e = 30 : "LA444" == t || "888777" == t ? e = 31 : "MA555" == t || "55555" == t ? e = 32 : "MO666" == t || "000000" == t ? e = 33 : "NE777" == t || "110110" == t ? e = 34 : "RE999" == t || "222888" == t ? e = 35 : "SA000" == t || "373737" == t ? e = 36 : "EAAAA" == t || "520520" == t ? e = 37 : "HABBB" == t || "202020" == t ? e = 38 : "SECCC" == t || "000222" == t ? e = 39 : "ILOVEDY" == t || "857857" == t ? e = 40 : "DYLIFE" == t || "201203" == t ? e = 41 : "880088" == t ? e = 42 : "201102" == t ? e = 43 : "666666" == t ? e = 44 : "888888" == t ? e = 45 : "323200" == t ? e = 46 : "567800" == t ? e = 47 : "195200" == t ? e = 48 : "202008" == t ? e = 49 : "198400" == t ? e = 50 : "701701" == t ? e = 51 : "202009" == t ? e = 52 : "999999" == t ? e = 53 : "202007" == t ? e = 54 : "212121" == t ? e = 55 : "123456" == t && (e = 56),
            0 == e)
                return this.tishi.visible = !0,
                void Laya.timer.once(1e3, this, () => {
                    this.tishi.visible = !1
                }
                );
            pe.m_index = e - 1,
            Ie.SkinIndex = pe.m_index,
            Ie.Unlock(0, pe.m_index),
            56 == e && (Ie.SkinType = 27,
            Ie.Unlock(1, 20),
            Ie.DanceIndex = 20,
            Ie.Unlock(2, 27)),
            Ie.saveScore(),
            this.CloseUi(),
            Le.instance().GetPanel(u.Panel_Store).MyClose(),
            Le.instance().OpenUi(u.Panel_zhanshi)
        }
    }
    pe.m_index = 0;
    class ue extends v {
        constructor() {
            super(),
            this._view = fgui.UIPackage.createObject("Runman", "Panel_zhanshi").asCom,
            this._view.setSize(fgui.GRoot.inst.width, fgui.GRoot.inst.height),
            this.m_holder = this._view.getChild("com_zhanshi").asCom.getChild("moxing").asGraph,
            this._btn_ljsc = this._view.getChild("com_zhanshi").asCom.getChild("btn_ljsc").asButton,
            this._btn_ljsc.onClick(this, this.btn_ljsc),
            fgui.GRoot.inst.addChild(this._view)
        }
        btn_ljsc() {
            this.CloseUi(),
            Ie.UiSubScene1.active = !1
        }
        InitUi() {
            if (this._view.visible = !0,
            Ie.UiSubScene1.active = !0,
            this.m_holder.x += 40,
            T.instance.GetOrInitCamera(200, "Player" + (pe.m_index + 1), this.m_holder, 0),
            55 == pe.m_index) {
                this._view.getChild("com_zhanshi").asCom.getChild("n10").asImage.visible = !0,
                this._view.getChild("com_zhanshi").asCom.getChild("n12").asImage.visible = !0
            }
        }
    }
    class ge extends v {
        constructor() {
            super(),
            this._view = fgui.UIPackage.createObject("Runman", "Panel_Mask").asCom,
            this._view.setSize(fgui.GRoot.inst.width, fgui.GRoot.inst.height),
            fgui.GRoot.inst.addChild(this._view),
            this._view.sortingOrder = 1200
        }
    }
    class _e extends v {
        constructor() {
            super(),
            this.openReduce = !1,
            this._view = fgui.UIPackage.createObject("Runman", "Panel_WuDian").asCom,
            this._view.setSize(fgui.GRoot.inst.width, fgui.GRoot.inst.height),
            fgui.GRoot.inst.addChild(this._view),
            this.jd = this._view.getChild("jd").asProgress,
            this.gray_moxing = this._view.getChild("gray_moxing").asGraph,
            this.c_moxing = this._view.getChild("c_moxing").asCom,
            this._moxing = this.c_moxing.getChild("moxing").asGraph,
            this._mask_moxing = this.c_moxing.getChild("n1").asGraph,
            this.btn_ljsc = this._view.getChild("btn_ljsc").asButton,
            this.btn_ljsc.onClick(this, this.OnCliCkLJSC),
            this.btn_ldjhpf = this._view.getChild("btn_ldjhpf").asButton,
            this.btn_ldjhpf.onClick(this, this.OnCliCkLDJHPF),
            this.btn_boxAd = this._view.getChild("btn_boxAd").asButton,
            this.btn_boxAd.onClick(this, se.Instance.qqCreateAppBox)
        }
        InitUi() {
            let e = [];
            for (let t = 0; t < 26; ++t) {
                0 == Ie.IsUnlock(0, t) && e.push(t + 1)
            }
            0 != e.length && (this.SkinIndex = e[N.getRandomInt(0, e.length - 1)],
            console.log("误点界面隐藏banner"),
            se.Instance.hideBanner(),
            Ie.openWuDian = !0,
            this.gray_moxing.x = 180,
            this.c_moxing.x = 180,
            this._view.visible = !0,
            Ie.UiSubScene1.active = !0,
            T.instance.GetOrInitCamera(200, "Player" + this.SkinIndex, this.gray_moxing, 0),
            T.instance.GetOrInitCamera(201, "Player" + this.SkinIndex, this._moxing, 0))
        }
        onUpdate() {
            console.log("Panel_WuDian")
        }
        OnCliCkLJSC() {
            this.CloseUi(),
            Ie.openWuDian = !1,
            se.Instance.showBanner(),
            Ie.UiSubScene1.active = !1
        }
        OnCliCkLDJHPF() {
            Laya.timer.loop(200, this, this.ReduceProgress),
            this.addProgress()
        }
        addProgress() {
            if (!(this.jd.value >= 100)) {
                if (this.jd.value += 10,
                this.jd.value >= 80) {
                    this.btn_ldjhpf.y = this.btn_ljsc.y;
                    let e = Laya.Browser.window.dnsdk.data.getLateTypeByPosition("level_win");
                    console.log("level_win:" + e),
                    e == L.banner ? se.Instance.showBanner() : e == L.boxAd && (this.btn_boxAd.visible = !0)
                }
                this.jd.value >= 100 && (this.jd.value = 100,
                this.jd.visible = !1,
                this.btn_ldjhpf.visible = !1,
                this.gray_moxing.visible = !1,
                Ie.Unlock(0, this.SkinIndex - 1),
                Laya.timer.clearAll(this),
                Laya.timer.once(300, this, () => {
                    this.btn_ljsc.visible = !0
                }
                )),
                this._mask_moxing.height = this.jd.value / 100 * 466
            }
        }
        ReduceProgress() {
            this.jd.value -= 20,
            this.jd.value <= 0 && (this.jd.value = 0,
            this.openReduce = !1,
            Laya.timer.clearAll(this)),
            this._mask_moxing.height = this.jd.value / 100 * 466
        }
    }
    class ye extends v {
        constructor() {
            super(),
            this._view = fgui.UIPackage.createObject("Runman", "Panel_Tips").asCom,
            this._view.setSize(fgui.GRoot.inst.width, fgui.GRoot.inst.height),
            this.txt_tip = this._view.getChild("n1").asLabel,
            this.addFail = this._view.getTransition("addFail"),
            fgui.GRoot.inst.addChild(this._view),
            this._view.sortingOrder = 1500,
            this.SetTip()
        }
        SetTip() {
            this.txt_tip.text = ye.tips,
            this.addFail.play(),
            Laya.timer.once(1500, this, this.CloseUi)
        }
        InitUi() {
            this._view.visible = !0,
            this.SetTip()
        }
    }
    ye.tips = "";
    class Le extends Laya.Script {
        constructor() {
            super(),
            this.UiMap = {}
        }
        static instance() {
            return this._instance || (this._instance = new Le),
            this._instance
        }
        factoryCreate(e) {
            let t;
            switch (e) {
            case u.Panel_MainMenu:
                t = new ve;
                break;
            case u.Panel_Matching:
                t = new I;
                break;
            case u.Panel_Countdown:
                t = new b;
                break;
            case u.Panel_Gameplay:
                t = new k;
                break;
            case u.Panel_Settlement:
                t = new x;
                break;
            case u.Panel_Store:
                t = new le;
                break;
            case u.Panel_End_mode1:
                t = new oe;
                break;
            case u.Panel_End_mode2:
                t = new re;
                break;
            case u.Panel_Juhe:
                t = new he;
                break;
            case u.Panel_sdk:
                t = new de;
                break;
            case u.Panel_Kaiping:
                t = new ce;
                break;
            case u.Panel_WXchaping:
                t = new me;
                break;
            case u.Panel_duihuan:
                t = new pe;
                break;
            case u.Panel_zhanshi:
                t = new ue;
                break;
            case u.Panel_Mask:
                t = new ge;
                break;
            case u.Panel_WuDian:
                t = new _e;
                break;
            case u.Panel_Tips:
                t = new ye
            }
            return t
        }
        GetPanel(e) {
            return this.UiMap[e]
        }
        OpenUi(e) {
            let t = this.UiMap[e];
            null == t && (t = this.factoryCreate(e),
            this.UiMap[e] = t),
            t.InitUi()
        }
        CloseUi(e) {
            let t = this.UiMap[e];
            null != t && t.CloseUi()
        }
        destroyUi(e) {
            let t = this.UiMap[e];
            null != t && (t.DestroyUi(),
            this.UiMap[e] = null)
        }
        Gameplay_CloseTips() {
            this.GetPanel(u.Panel_Gameplay).CloseTips()
        }
    }
    class fe {
    }
    class Se extends Laya.Script3D {
        onAwake() {
            Se.instance = this,
            this.isTouchActive = !1,
            Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onTapDown),
            Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onTapUp)
        }
        onTapDown(e) {
            this.isTouchActive
        }
        onTapUp(e) {
            this.isTouchActive
        }
        Activate() {
            this.isTouchActive = !0
        }
        Deactivate() {
            this.isTouchActive = !1
        }
    }
    class we extends Laya.Script3D {
        constructor() {
            super(...arguments),
            this.waitingForTap = !1,
            this.waitingForTap1 = !1,
            this.isVictory = !1,
            this.specialLevelData = {},
            this.interstitialExposureTime = 35e3
        }
        onAwake() {
            we.instance = this,
            this.isfirstGame = !1;
            {
                let e = new fe;
                e.ID = 100,
                e.type1 = 2,
                e.index1 = 15,
                e.type2 = 1,
                e.index2 = 8,
                e.type3 = 0,
                e.index3 = 15,
                this.specialLevelData[e.ID] = e
            }
            {
                let e = new fe;
                e.ID = 101,
                e.type1 = 2,
                e.index1 = 18,
                e.type2 = 1,
                e.index2 = 11,
                e.type3 = 0,
                e.index3 = 18,
                this.specialLevelData[e.ID] = e
            }
            {
                let e = new fe;
                e.ID = 102,
                e.type1 = 2,
                e.index1 = 21,
                e.type2 = 1,
                e.index2 = 14,
                e.type3 = 0,
                e.index3 = 21,
                this.specialLevelData[e.ID] = e
            }
            {
                let e = new fe;
                e.ID = 103,
                e.type1 = 2,
                e.index1 = 24,
                e.type2 = 1,
                e.index2 = 17,
                e.type3 = 0,
                e.index3 = 24,
                this.specialLevelData[e.ID] = e
            }
            {
                let e = new fe;
                e.ID = 104,
                e.type1 = 2,
                e.index1 = 16,
                e.type2 = 1,
                e.index2 = 9,
                e.type3 = 0,
                e.index3 = 16,
                this.specialLevelData[e.ID] = e
            }
            {
                let e = new fe;
                e.ID = 105,
                e.type1 = 2,
                e.index1 = 19,
                e.type2 = 1,
                e.index2 = 12,
                e.type3 = 0,
                e.index3 = 19,
                this.specialLevelData[e.ID] = e
            }
            {
                let e = new fe;
                e.ID = 106,
                e.type1 = 2,
                e.index1 = 22,
                e.type2 = 1,
                e.index2 = 15,
                e.type3 = 0,
                e.index3 = 22,
                this.specialLevelData[e.ID] = e
            }
            {
                let e = new fe;
                e.ID = 107,
                e.type1 = 2,
                e.index1 = 25,
                e.type2 = 1,
                e.index2 = 18,
                e.type3 = 0,
                e.index3 = 25,
                this.specialLevelData[e.ID] = e
            }
            {
                let e = new fe;
                e.ID = 108,
                e.type1 = 2,
                e.index1 = 17,
                e.type2 = 1,
                e.index2 = 10,
                e.type3 = 0,
                e.index3 = 17,
                this.specialLevelData[e.ID] = e
            }
            {
                let e = new fe;
                e.ID = 109,
                e.type1 = 2,
                e.index1 = 20,
                e.type2 = 1,
                e.index2 = 13,
                e.type3 = 0,
                e.index3 = 20,
                this.specialLevelData[e.ID] = e
            }
            {
                let e = new fe;
                e.ID = 110,
                e.type1 = 2,
                e.index1 = 23,
                e.type2 = 1,
                e.index2 = 16,
                e.type3 = 0,
                e.index3 = 23,
                this.specialLevelData[e.ID] = e
            }
            {
                let e = new fe;
                e.ID = 111,
                e.type1 = 2,
                e.index1 = 26,
                e.type2 = 1,
                e.index2 = 19,
                e.type3 = 0,
                e.index3 = 26,
                this.specialLevelData[e.ID] = e
            }
        }
        onStart() {}
        startGame() {
            this.isVictory = !1,
            we.levelState = t.Waiting,
            this.waitingForTap = !0,
            this.waitingForTap1 = !0,
            null != Ie.Spray && (Ie.Spray.active = !0),
            Le.instance().OpenUi(u.Panel_MainMenu),
            this.isfirstGame = !0;
            let e = Le.instance().GetPanel(u.Panel_MainMenu);
            null != e && e.SetLevelId(Ie.level + 1),
            0 == ne.instance.mlevelType ? C.instance.playBgMusic(o.putong) : 1 == ne.instance.mlevelType && C.instance.playBgMusic(o.richang)
        }
        isPlayerGame() {
            return we.levelState == t.Playing
        }
        startPlayerGame() {
            O.instance.SetCameraAngle(5, 1.486, 0, 5),
            Se.instance.Activate(),
            we.levelState = t.Playing;
            for (let e = 0; e < Ie.playerEnemyList.length; ++e)
                Ie.playerEnemyList[e].startMove();
            Ie.player.startMove()
        }
        OnTapPerformed() {
            this.waitingForTap && we.levelState != t.Shopint && (this.waitingForTap = !1,
            Le.instance().GetPanel(u.Panel_MainMenu).startPlaye())
        }
        OnTapPerformed1() {
            if (this.waitingForTap1) {
                if (we.levelState != t.WaitPlay)
                    return;
                this.waitingForTap1 = !1,
                Le.instance().GetPanel(u.Panel_Gameplay).CloseTips()
            }
        }
        LevelEnd() {
            ne.instance.newloadLevel(Ie.level, 0)
        }
        specialLevel() {
            ne.instance.newloadLevel(Ie.specialLevel, 1)
        }
        LevelComplete() {
            if (we.levelState = t.GameOver,
            Se.instance.Deactivate(),
            this.isVictory = !0,
            Ie.endMode1 = !0,
            1 == ne.instance.mlevelType) {
                if (Ie.specialGold = Ie.AddRanking(Ie.specialLevel, ne.instance.playerRanking) / 100,
                Le.instance().OpenUi(u.Panel_End_mode2),
                Ie.specialGold >= .75) {
                    let e = this.specialLevelData[Ie.specialLevel];
                    0 == Ie.IsUnlock(e.type1, e.index1) ? Ie.Unlock(e.type1, e.index1) : 0 == Ie.specialGold1 && (Ie.Gold += 50,
                    Ie.specialGold1 = 1,
                    w.setItem("specialGold1", Ie.specialGold1.toString()))
                }
                if (Ie.specialGold >= .9) {
                    let e = this.specialLevelData[Ie.specialLevel];
                    0 == Ie.IsUnlock(e.type2, e.index2) ? Ie.Unlock(e.type2, e.index2) : 0 == Ie.specialGold2 && (Ie.Gold += 150,
                    Ie.specialGold2 = 1,
                    w.setItem("specialGold2", Ie.specialGold2.toString()))
                }
                if (Ie.specialGold >= .99) {
                    let e = this.specialLevelData[Ie.specialLevel];
                    0 == Ie.IsUnlock(e.type3, e.index3) ? Ie.Unlock(e.type3, e.index3) : 0 == Ie.specialGold3 && (Ie.Gold += 300,
                    Ie.specialGold3 = 1,
                    w.setItem("specialGold3", Ie.specialGold3.toString()))
                }
                Le.instance().GetPanel(u.Panel_MainMenu).CloseUi()
            } else
                Le.instance().GetPanel(u.Panel_MainMenu).CloseUi(),
                Le.instance().OpenUi(u.Panel_End_mode1),
                1 == ne.instance.playerRanking ? (Ie.level += 1,
                Ie.Gold += 100) : Ie.Gold += 50;
            Ie.saveScore()
        }
        ShopUnlock() {
            for (let e = 0; e < 3; ++e)
                for (let t = 0; t < 28; ++t) {
                    let i = M.shopDataDic[e][t];
                    if (null != i && i.unlockShopType == y.level) {
                        0 == Ie.IsUnlock(e, t) && Ie.length + 1 >= y.level && Ie.Unlock(e, t)
                    }
                }
        }
        GameOver() {
            this.isVictory = !1,
            we.levelState = t.GameOver,
            Se.instance.Deactivate()
        }
        onUpdate() {
            "qq" == se.Instance.platform && (we.levelState == t.Playing || Ie.openPaiLian || (we.time_game += Laya.timer.delta,
            we.time_game >= this.interstitialExposureTime && !Ie.openInterstitial && (Ie.openPaiLian = !0,
            se.Instance.openInterstitial(),
            this.interstitialExposureTime = 65e3,
            we.time_game = 0)))
        }
    }
    we.levelState = t.Initing,
    we.playerIsLoad = !1,
    we.time_game = 0;
    class Ce extends Laya.EventDispatcher {
        constructor(e, t) {
            super(),
            this._dir = t,
            this._button = e.getChild("stick_" + t).asButton,
            this._button.changeStateOnClick = !1,
            this._thumb = this._button.getChild("thumb"),
            this._touchArea = e.getChild("touch_" + t),
            this._center = e.getChild("center_" + t),
            this._InitX = this._center.x + this._center.width / 2,
            this._InitY = this._center.y + this._center.height / 2,
            this.touchId = -1,
            this.radius = 80,
            this._curPos = new Laya.Point,
            this._touchArea.on(Laya.Event.MOUSE_DOWN, this, this.onTouchDown)
        }
        Trigger(e) {
            this.onTouchDown(e)
        }
        onTouchDown(e) {
            if (this.event("MouseDown"),
            -1 == this.touchId) {
                this.touchId = e.touchId,
                null != this._tweener && (this._tweener.clear(),
                this._tweener = null),
                fgui.GRoot.inst.globalToLocal(Laya.stage.mouseX, Laya.stage.mouseY, this._curPos);
                var t = this._curPos.x
                  , i = this._curPos.y;
                this._button.selected = !0,
                t < 0 && (t = 0),
                i > fgui.GRoot.inst.height && (i = fgui.GRoot.inst.height),
                this._lastStageX = t,
                this._lastStageY = i,
                this._startStageX = t,
                this._startStageY = i,
                this._center.visible = !0,
                this._center.x = t - this._center.width / 2,
                this._center.y = i - this._center.height / 2,
                this._button.x = t - this._button.width / 2,
                this._button.y = i - this._button.height / 2;
                var a = t - this._InitX
                  , n = i - this._InitY
                  , s = 180 * Math.atan2(n, a) / Math.PI;
                this._thumb.rotation = s + 90,
                Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.OnTouchMove),
                Laya.stage.on(Laya.Event.MOUSE_UP, this, this.OnTouchUp)
            }
        }
        OnTouchUp(e) {
            -1 != this.touchId && e.touchId == this.touchId && (this.touchId = -1,
            this._thumb.rotation = this._thumb.rotation + 180,
            this._center.visible = !1,
            this._tweener = Laya.Tween.to(this._button, {
                x: this._InitX - this._button.width / 2,
                y: this._InitY - this._button.height / 2
            }, 300, Laya.Ease.circOut, Laya.Handler.create(this, function() {
                this._tweener = null,
                this._button.selected = !1,
                this._thumb.rotation = 0,
                this._center.visible = !0,
                this._center.x = this._InitX - this._center.width / 2,
                this._center.y = this._InitY - this._center.height / 2
            })),
            Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.OnTouchMove),
            Laya.stage.off(Laya.Event.MOUSE_UP, this, this.OnTouchUp),
            this.event(Ce.JoystickUp))
        }
        OnTouchMove(e) {
            if (-1 != this.touchId && e.touchId == this.touchId) {
                var t = Laya.stage.mouseX
                  , i = Laya.stage.mouseY
                  , a = t - this._lastStageX
                  , n = i - this._lastStageY;
                this._lastStageX = t,
                this._lastStageY = i;
                var s = this._button.x + a
                  , l = this._button.y + n
                  , o = s + this._button.width / 2 - this._startStageX
                  , r = l + this._button.height / 2 - this._startStageY
                  , h = Math.atan2(r, o)
                  , d = 180 * h / Math.PI;
                this._thumb.rotation = d + 90;
                var c = this.radius * Math.cos(h)
                  , m = this.radius * Math.sin(h);
                Math.abs(o) > Math.abs(c) && (o = c),
                Math.abs(r) > Math.abs(m) && (r = m),
                (s = this._startStageX + o) < 0 && (s = 0),
                (l = this._startStageY + r) > fgui.GRoot.inst.height && (l = fgui.GRoot.inst.height),
                this._button.x = s - this._button.width / 2,
                this._button.y = l - this._button.height / 2,
                this._dir,
                this.event(Ce.JoystickMoving, {
                    x: o / this.radius,
                    y: r / this.radius
                })
            }
        }
    }
    Ce.JoystickMoving = "JoystickMoving",
    Ce.JoystickUp = "JoystickUp";
    class ve extends v {
        constructor() {
            super(),
            this.m_isFiestEnter = !0,
            this.playerRanking = 0,
            console.warn("Loading finished"),
            window.PokiSDK.gameLoadingFinished(),
            this._view = fgui.UIPackage.createObject("Runman", "MainMenu").asCom,
            this._view.setSize(fgui.GRoot.inst.width, fgui.GRoot.inst.height),
            this.m_StartGame = this._view.getTransition("StartGame"),
            this.effcet_study = this._view.getTransition("effcet_study"),
            this.effcet_study_mobile = this._view.getTransition("effcet_study_mobile"),
            this.effcet_study_small = this._view.getTransition("effcet_study_small"),
            window.mainMenu = this,
            this.deviceIsLarge = window.matchMedia("(min-width: 1220px)"),
            this.deviceIsLarge.addListener(this.updateEffcetStudy.bind(this)),
            this.m_ReStartGame = this._view.getTransition("ReStartGame"),
            this.m_Begin = this._view.getTransition("Begin"),
            this.m_GlodText = this._view.getChild("n33").asCom.getChild("text_number").asLabel,
            this.m_btn_start = this._view.getChild("btn_start").asButton,
            this.m_btn_start.onClick(this, this.BtnStartClick),
            this._view.getChild("n31").asButton.onClick(this, this.BtnSetting),
            this._settingCtroller = this._view.getChild("setting_xiahua").asCom.getController("shake_shousuo"),
            this.m_isFirt = this._view.getController("isFirst"),
            this.m_btn_isShake = this._view.getChild("setting_xiahua").asCom.getChild("n0").asButton,
            this.m_btn_isShake.onClick(this, this.BtnIsShake),
            this.m_btn_isShake.selected = !0,
            this.m_btn_richang = this._view.getChild("btn_richang").asButton,
            this.m_btn_richang.onClick(this, this.btn_richang),
            this.m_btn_richang_Ctroller = this.m_btn_richang.getController("rc_jiesuo"),
            this.m_btn_jingdian = this._view.getChild("btn_jingdian").asButton,
            this.m_btn_jingdian.onClick(this, this.btn_jingdian),
            this.m_GameMode1 = this._view.getTransition("GameMode1"),
            this.m_GameMode2 = this._view.getTransition("GameMode2"),
            this.m_levelNum = this._view.getChild("level").asLabel,
            this.m_levelNum.y -= 8,
            this._view.getChild("n35").asImage.y = 632,
            this.m_remainingTime = this._view.getChild("n47").asLabel,
            this.m_mode2Progress = this._view.getChild("mode2Progress").asProgress,
            this.m_m_mode2ProgressText = this.m_mode2Progress.getChild("n4").asLabel,
            this.m_Level_Bar = this._view.getChild("Level_Bar").asProgress,
            this.m_LevelIdText = this.m_Level_Bar.getChild("levelid").asLabel,
            this.m_mingci = this._view.getChild("Level_Bar").asCom.getChild("mingci").asLabel,
            this.m_btn_begin = this._view.getChild("btn_begin").asButton,
            this.m_btn_begin.onClick(this, this.startPlaye),
            this.m_btn_store = this._view.getChild("btn_store").asButton,
            this.m_btn_store.onClick(this, this.OpenStore),
            this.m_AddFail = this._view.getTransition("AddFail"),
            this.m_btn_lai_jinbi = this._view.getChild("btn_lai_jinbi").asButton,
            this.m_btn_lai_jinbi.onClick(this, this.kaishi500),
            this.m_btn_lai_shipin = this._view.getChild("btn_lai_shipin").asButton,
            this.m_btn_lai_shipin.onClick(this, this.zailaiyici),
            this.m_specialLevelLoader2 = this._view.getChild("jiangli_zi").asLoader,
            this.m_specialLevelLoader1 = this._view.getChild("jiangli_hui").asLoader,
            this.m_specialLevelLoader3 = this._view.getChild("holder").asGraph,
            this.m_specialLevelLoader4 = this._view.getChild("jiangli_cheng").asLoader,
            this.m_get1 = this._view.getChild("get1").asCom,
            this.m_get2 = this._view.getChild("get2").asCom,
            this.m_get3 = this._view.getChild("get3").asCom,
            this.m_study = this._view.getChild("study").asCom,
            this.m_logo = this._view.getChild("logo2").asLoader,
            this._tick_left = new Ce(this._view,"left"),
            this._tick_left.on(Ce.JoystickMoving, this, this.onLeftTick_moving),
            this._tick_left.on(Ce.JoystickUp, this, this.onLeftTick_up),
            this.keyDownList = {},
            window.addEventListener("keydown", this.keyDownWindow.bind(this)),
            window.addEventListener("keyup", this.keyUpWindow.bind(this)),
            window.addEventListener("keydown", e => {
                ["ArrowDown", "ArrowUp", " "].includes(e.key) && e.preventDefault()
            }
            ),
            window.addEventListener("mousewheel", function(e) {
                e.preventDefault()
            }, {
                passive: !1
            }),
            window.addEventListener("wheel", function(e) {
                e.preventDefault()
            }, {
                passive: !1
            }),
            window.addEventListener("DOMMouseScroll", function(e) {
                e.preventDefault()
            }, {
                passive: !1
            }),
            this._Panel_stop = this._view.getChild("Panel_stop").asCom,
            this._view.getChild("btn_stop").asButton.onClick(this, this.Btn_stopPanel),
            this._Panel_stop.getChild("btn_stop_yes").asButton.onClick(this, this.Btn_Stop_yes),
            this._Panel_stop.getChild("btn_stop_no").asButton.onClick(this, this.Btn_Stop_no),
            this._trans_wxicon = this._view.getTransition("t7"),
            ve._C_shiyong = this._view.getChild("C_shiyong").asCom,
            ve._C_shiyong.visible = !1,
            ve._C_shiyong.getChild("Btn_blxx").asButton.onClick(this, this.CloseShiyong),
            ve._C_shiyong_n1 = ve._C_shiyong.getChild("kongtupian").asGraph,
            ve._C_shiyong.getChild("Btn_ljsy").asButton.onClick(this, this.useShiyong),
            this._C_gmo = this._view.getChild("C_gmo").asCom,
            this._C_gmo.visible = !1,
            this._C_gmo.getChild("btn_blxx").asButton.onClick(this, this.CloseGmo),
            this._C_gmo_n1 = this._C_gmo.getChild("texture").asGraph,
            this._C_gmo.getChild("btn_ligz").asButton.onClick(this, this.useGaiZao),
            this.m_gmo = this._C_gmo.getTransition("tween"),
            this._btn_kaishitiaozhan = this._view.getChild("btn_kaishitiaozhan").asButton,
            this._btn_kaishitiaozhan.onClick(this, this.BtnStartClick),
            this._view.getChild("n91").asLabel.sortingOrder = 100,
            console.log("=============================================="),
            se.Instance.openBanner(),
            this.SDKUIAwake(),
            console.log("=============================================="),
            fgui.GRoot.inst.addChild(this._view);
            let e = this._view.getChild("n106").asGraph;
            T.instance.GetOrInitCamera(200, "Player1", e, 0),
            T.instance.GetOrInitCamera(201, "Player1", e, 0),
            T.instance.GetOrInitCamera(202, "Player1", ve._C_shiyong_n1, 0),
            console.log(oe),
            console.log(re),
            1 == ve.isshiyongOpen && T.instance.GetOrInitCamera(101, "Player" + ve.SkinIndex, ve._C_shiyong_n1, 0),
            Laya.timer.frameLoop(1, this, this.RefreshShiYong),
            this.btn_toggleMute = this._view.getChild("toggleMute").asButton,
            Laya.SoundManager.muted = "1" === w.getItem("muted"),
            this.btn_toggleMute.selected = Laya.SoundManager.muted,
            this.btn_toggleMute.onClick(this, this.ToggleMute.bind(this))
        }
        ToggleMute() {
            Laya.SoundManager.muted = this.btn_toggleMute.selected,
            w.setItem("muted", Laya.SoundManager.muted ? "1" : "0"),
            Laya.SoundManager.muted || C.instance.verifyIfShouldPlay()
        }
        keyDownWindow(e) {
            let t = e.keyCode;
            t === Laya.Keyboard.LEFT || t === Laya.Keyboard.RIGHT || t === Laya.Keyboard.Q || t === Laya.Keyboard.A || t === Laya.Keyboard.D ? (this.keyDownList[t] = !0,
            this.updateMovementDegree()) : t === Laya.Keyboard.DOWN || t === Laya.Keyboard.UP || t === Laya.Keyboard.Z || t === Laya.Keyboard.W || t === Laya.Keyboard.S ? (this.keyDownList[t] = !0,
            this.updateFallSpeed()) : t === Laya.Keyboard.ENTER || t === Laya.Keyboard.SPACE ? this._C_gmo.visible ? this.CloseGmo() : W.isInGameplay || (0 === this.m_isFirt.selectedIndex ? this.startPlaye() : 1 === this.m_isFirt.selectedIndex ? this.m_btn_lai_jinbi.enabled ? this.kaishi500() : this.zailaiyici() : this.BtnStartClick()) : t === Laya.Keyboard.ESCAPE && (W.isInGameplay ? this.Btn_stopPanel() : this._C_gmo.visible && this.CloseGmo())
        }
        keyUpWindow(e) {
            let t = e.keyCode;
            t === Laya.Keyboard.LEFT || t === Laya.Keyboard.RIGHT || t === Laya.Keyboard.Q || t === Laya.Keyboard.A || t === Laya.Keyboard.D ? (delete this.keyDownList[t],
            this.updateMovementDegree()) : t !== Laya.Keyboard.DOWN && t !== Laya.Keyboard.UP && t !== Laya.Keyboard.Z && t !== Laya.Keyboard.W && t !== Laya.Keyboard.S || (delete this.keyDownList[t],
            this.updateFallSpeed())
        }
        updateMovementDegree() {
            let e = 0;
            (this.keyDownList[Laya.Keyboard.LEFT] || this.keyDownList[Laya.Keyboard.Q] || this.keyDownList[Laya.Keyboard.A]) && (e -= 1),
            (this.keyDownList[Laya.Keyboard.RIGHT] || this.keyDownList[Laya.Keyboard.D]) && (e += 1),
            0 === e ? this.onLeftTick_up() : this.onLeftTick_moving({
                x: e,
                y: 0
            })
        }
        updateFallSpeed() {
            let e = this.keyDownList[Laya.Keyboard.UP] || this.keyDownList[Laya.Keyboard.Z] || this.keyDownList[Laya.Keyboard.W] || this.keyDownList.JoystickUp
              , t = this.keyDownList[Laya.Keyboard.DOWN] || this.keyDownList[Laya.Keyboard.S] || this.keyDownList.JoystickDown;
            Ie.player.m_fallSpeed = e ^ t ? e ? Ie.player.m_slowFallSpeed : Ie.player.m_fastFallSpeed : Ie.player.m_defaultFallSpeed
        }
        SDKUIAwake() {
            let e = se.Instance.platform;
            if (console.log("platform:" + e),
            "tt" == e)
                ;
            else if ("vivo" == e || "oppo" == e)
                "oppo" == e && console.log("oppo autoPopHtui:" + Ie.autoPopHtui),
                console.log("添加点击创建桌面图标事件");
            else if ("wechat" == e) {
                this._btn_wxIcon = this._view.getChild("btn_WXicon").asButton;
                let e = [];
                e.length > 0 && (this._btn_wxIcon.icon = e[0].icon,
                this._btn_wxIcon.onClick(this, () => {
                    se.Instance.navigateToMiniProgram(e[0].pushAppID, e[0].openPath, e[0].extraData)
                }
                ),
                this._btn_wxIcon.visible = !0,
                this._btn_wxIcon.getChild("n4").visible = !0)
            }
        }
        openSpecialNotice() {
            if (!Ie.openSpecialNotice) {
                for (var e = -1, t = 47; t <= 54; t++)
                    if (0 == Ie.IsUnlock(0, t)) {
                        e = t;
                        break
                    }
                -1 != e && Laya.Scene.open("SpecialNotice.scene", !1, e + 1)
            }
        }
        InitSDKUI() {
            switch (se.Instance.platform) {
            case "wechat":
                this._btn_wxIcon.visible = !0;
                break;
            case "qq":
                break;
            case "tt":
                Laya.Browser.onIOS || se.Instance.ttShowMoreGame(),
                Ie.isDouYin;
                break;
            case "oppo":
                console.log("oppo 平台返回自动弹出：" + Ie.autoPopHtui),
                Ie.autoPopHtui && (this.Btn_cebian(),
                Ie.autoPopHtui = !1)
            }
        }
        Btn_cebian() {}
        ListAnimation() {}
        renderListItem(e, t) {
            let i = t.asCom.getChild("listitem").asList;
            i.itemRenderer = Laya.Handler.create(this, this.renderListItem_item, [e], !1),
            i.numItems = 3,
            i.on(fgui.Events.CLICK_ITEM, this, this.onListClickItem, [e])
        }
        renderListItem_item(e, t, i) {
            let a = i.asCom
              , n = t + 3 * e;
            n %= this.m_listLenth,
            a.getChild("n0").asLoader.url = Laya.Browser.window.dnsdk.data.pushData.grouppageList[n].icon,
            a.getChild("n1").asTextField.text = Laya.Browser.window.dnsdk.data.pushData.grouppageList[n].gameName
        }
        onListClickItem(e, t) {}
        Btn_stopPanel() {
            W.gameplayStop(),
            this.Btn_stopPanelReal(),
            Ie.isSdk && se.Instance.openYSinterstitial()
        }
        Btn_stopPanelReal() {
            this._Panel_stop.visible = !0,
            Laya.timer.pause()
        }
        Btn_Stop_yes() {
            this._Panel_stop.visible = !1,
            Laya.timer.resume(),
            this.m_GameMode1.play(),
            this.isOpen = !1,
            ve.onLoadShiyong(),
            Se.instance.Deactivate(),
            we.instance.LevelEnd(),
            Ie.level >= 2 ? (this._view.getChild("n33").asCom.visible = !0,
            this._view.getChild("n69").asImage.visible = !0,
            this._view.getChild("n41").asImage.visible = !0,
            this.m_btn_store.visible = !0,
            this.m_btn_jingdian.visible = !0,
            this.m_btn_richang.visible = !0,
            this.btn_toggleMute.visible = !0) : (this._view.getChild("n33").asCom.visible = !1,
            this._view.getChild("n69").asImage.visible = !1,
            this._view.getChild("n41").asImage.visible = !1,
            this.m_btn_store.visible = !1,
            this.m_btn_jingdian.visible = !1,
            this.btn_toggleMute.visible = !0,
            this.m_btn_richang.visible = !1)
        }
        Btn_Stop_no() {
            this._Panel_stop.visible = !1,
            Laya.timer.resume(),
            W.gameplayStart()
        }
        Closestudy() {
            this.m_study.visible = !1
        }
        SetLevelId(e) {
            1 == ne.instance.mlevelType ? this.m_LevelIdText.text = "" : this.m_LevelIdText.text = e.toString()
        }
        updateEffcetStudy() {
            this.deviceIsLarge;
            const e = this.effcet_study.playing || this.effcet_study_small.playing;
            this.effcet_study_small.stop(),
            this.effcet_study.stop(),
            e && 1 !== this.m_isFirt.selectedIndex && setTimeout( () => {
                this.effcet_study_small.play(null, -1)
            }
            , 200)
        }
        InitUi() {
            if (this.InitSDKUI(),
            Ie.player.resetSpeed(),
            Ie.endMode1 && (Ie.endMode1 = !1,
            ve.onLoadShiyong()),
            this.m_btn_lai_jinbi.enabled = Ie.Gold >= 500,
            this.m_GlodText.text = Ie.Gold.toString(),
            Ie.openWuDian || console.log("主界面打开banner"),
            1 == ne.instance.mlevelType ? (0 == Ie.mianfei ? (this.m_isFirt.selectedIndex = 0,
            this.m_btn_begin.visible = !0) : this.m_isFirt.selectedIndex = 1,
            this.effcet_study.stop(),
            this.effcet_study_mobile.stop(),
            this.effcet_study_small.stop()) : (this.m_isFirt.selectedIndex = 0,
            this.m_study.visible = !1,
            setTimeout( () => {
                1 !== this.m_isFirt.selectedIndex && (window.mobileAndTabletCheck() ? this.effcet_study_mobile.play(null, -1) : (this.effcet_study_small.play(null, -1),
                this.updateEffcetStudy()),
                this.m_study.visible = !0)
            }
            , 1500),
            this._btn_kaishitiaozhan.visible = !0,
            Ie.level >= 2 ? (this._view.getChild("n33").asCom.visible = !0,
            this._view.getChild("n69").asImage.visible = !0,
            this._view.getChild("n41").asImage.visible = !0,
            this.m_btn_store.visible = !0,
            this.m_btn_jingdian.visible = !0,
            this.m_btn_richang.visible = !0,
            this.btn_toggleMute.visible = !0,
            this.m_isFirt.selectedIndex = 3) : (this._view.getChild("n33").asCom.visible = !1,
            this._view.getChild("n69").asImage.visible = !1,
            this._view.getChild("n41").asImage.visible = !1,
            this.m_btn_store.visible = !1,
            this.m_btn_jingdian.visible = !1,
            this.btn_toggleMute.visible = !0,
            this.m_btn_richang.visible = !1,
            this.m_isFirt.selectedIndex = 0)),
            this._view.visible = !0,
            1 == this.isOpen)
                return;
            Ie.player.huifu(),
            this.isOpen = !0,
            this.m_isFiestEnter ? (this.m_StartGame.play(),
            this.m_isFiestEnter = !1,
            Laya.timer.once(1e3, this, () => {
                C.instance.playBgMusic(o.putong)
            }
            )) : (this.m_ReStartGame.play(),
            this._view.getChild("n31").asButton.visible = !1);
            let e = Ie.level + 1;
            this.m_levelNum.text = e + "/" + 100 * Math.ceil(e / 100);
            let t = Ie.GetRanking(Ie.specialLevel)
              , i = 0;
            t >= 100 && (t = 100),
            0 == (i = t >= 99 ? 100 : t >= 80 ? .75 * t : t > 65 ? .48 * t : .35 * t) && (i = 10),
            this.m_mode2Progress.value = i,
            this.m_m_mode2ProgressText.text = t.toFixed(2) + "%",
            100 == Ie.specialLevel || 104 == Ie.specialLevel || 108 == Ie.specialLevel ? this.m_logo.url = fgui.UIPackage.getItemURL("Runman", "logo_3") : 101 == Ie.specialLevel || 105 == Ie.specialLevel || 109 == Ie.specialLevel ? this.m_logo.url = fgui.UIPackage.getItemURL("Runman", "logo_1") : 102 == Ie.specialLevel || 106 == Ie.specialLevel || 110 == Ie.specialLevel ? this.m_logo.url = fgui.UIPackage.getItemURL("Runman", "logo_2") : 103 != Ie.specialLevel && 107 != Ie.specialLevel && 111 != Ie.specialLevel || (this.m_logo.url = fgui.UIPackage.getItemURL("Runman", "logo_0"));
            let a = we.instance.specialLevelData[Ie.specialLevel];
            if (null == a)
                return;
            let n = M.shopDataDic[a.type1][a.index1]
              , s = Ie.IsUnlock(a.type1, a.index1);
            s > 0 ? (this.m_specialLevelLoader1.asLoader.url = fgui.UIPackage.getItemURL("Runman", "coin"),
            this.m_get1.asCom.visible = 0 == Ie.specialGold1) : (this.m_specialLevelLoader1.asLoader.url = fgui.UIPackage.getItemURL("Runman", n.IconUrl),
            this.m_get1.asCom.visible = s > 0);
            let l = Ie.IsUnlock(a.type2, a.index2);
            n = M.shopDataDic[a.type2][a.index2],
            l > 0 ? (this.m_get2.asCom.visible = 0 == Ie.specialGold2,
            this.m_specialLevelLoader2.asLoader.url = fgui.UIPackage.getItemURL("Runman", "coin")) : (this.m_get2.asCom.visible = l > 0,
            this.m_specialLevelLoader2.asLoader.url = fgui.UIPackage.getItemURL("Runman", n.IconUrl));
            let r = Ie.IsUnlock(a.type3, a.index3);
            n = M.shopDataDic[a.type3][a.index3];
            let h = Number(n.IconUrl);
            r > 0 ? (this.m_specialLevelLoader4.visible = !0,
            this.m_specialLevelLoader3.visible = !1,
            this.m_get3.asCom.visible = 0 == Ie.specialGold3) : (this.m_specialLevelLoader4.visible = !1,
            this.m_specialLevelLoader3.visible = !0,
            T.instance.GetOrInitCamera(100, "Player" + h, this.m_specialLevelLoader3, h - 1),
            this.m_get3.asCom.visible = Ie.IsUnlock(a.type3, a.index3) > 0),
            Ie.level >= 2 ? this.m_btn_richang_Ctroller.selectedIndex = 0 : this.m_btn_richang_Ctroller.selectedIndex = 1
        }
        BtnSetting() {
            0 == this._settingCtroller.selectedIndex ? this._settingCtroller.selectedIndex = 1 : this._settingCtroller.selectedIndex = 0
        }
        BtnIsShake() {
            1 == this.m_btn_isShake.selected ? C.instance.isShake = !0 : C.instance.isShake = !1
        }
        BtnStartClick() {
            if (1 != ne.instance.mlevelType && 0 == Se.instance.isTouchActive) {
                if (we.levelState != t.WaitPlay)
                    return;
                if (0 == Ie.player.m_IsLoad)
                    return;
                for (let e = 0; e < Ie.playerEnemyList.length; ++e)
                    if (0 == Ie.playerEnemyList[e].m_IsLoad) {
                        if (!Ie.defaultSkin)
                            return;
                        Ie.playerEnemyList[e].forceLoadInstantly()
                    }
                Ie.player._Zoffset = 3.5,
                we.instance.OnTapPerformed()
            }
        }
        startPlaye() {
            if (we.levelState == t.WaitPlay) {
                if (this.effcet_study.stop(),
                this.effcet_study_mobile.stop(),
                this.effcet_study_small.stop(),
                1 == ne.instance.mlevelType) {
                    if (0 != Ie.mianfei)
                        return;
                    Ie.mianfei = 1,
                    w.setItem("mianfei", Ie.mianfei.toString())
                }
                this.m_Begin && this.m_Begin.play(),
                this.m_StartGame && this.m_StartGame.stop(),
                this.m_ReStartGame && this.m_ReStartGame.stop(),
                this._settingCtroller.selectedIndex = 0,
                "tt" == se.Instance.platform ? (se.Instance.ttRecord(),
                se.Instance.ttHideMoreGame(),
                se.Instance.hideBanner()) : "wechat" == se.Instance.platform && (this._btn_wxIcon.visible = !1),
                we.instance.startPlayerGame(),
                "qq" != se.Instance.platform && se.Instance.hideBanner(),
                this._btn_kaishitiaozhan.visible = !1,
                this.OpenGmo(),
                this.CloseShiyong()
            }
        }
        kaishi500() {
            if (we.levelState == t.WaitPlay && 0 != ne.instance.mlevelType) {
                if (1 == ne.instance.mlevelType) {
                    if (!(Ie.Gold >= 500))
                        return;
                    Ie.Gold -= 500,
                    w.setItem("Gold", Ie.Gold.toString())
                }
                this.m_isFirt.selectedIndex = 2,
                this.m_Begin && this.m_Begin.play(),
                this.m_StartGame && this.m_StartGame.stop(),
                this.m_ReStartGame && this.m_ReStartGame.stop(),
                "tt" == se.Instance.platform && (se.Instance.ttRecord(),
                se.Instance.ttHideMoreGame()),
                we.instance.startPlayerGame(),
                "qq" != se.Instance.platform && se.Instance.hideBanner(),
                this._btn_kaishitiaozhan.visible = !1,
                this.OpenGmo()
            }
        }
        zailaiyici() {
            Ie.isSdk ? W.rewarded(e => {
                e ? this.zailaiyiciReal() : this.m_AddFail.play()
            }
            ) : this.zailaiyiciReal()
        }
        zailaiyiciReal() {
            we.levelState == t.WaitPlay && 0 != ne.instance.mlevelType && (this.m_isFirt.selectedIndex = 2,
            this.m_Begin && this.m_Begin.play(),
            this.m_StartGame && this.m_StartGame.stop(),
            this.m_ReStartGame && this.m_ReStartGame.stop(),
            "tt" == se.Instance.platform && (se.Instance.ttRecord(),
            se.Instance.ttHideMoreGame()),
            we.instance.startPlayerGame(),
            "qq" != se.Instance.platform && se.Instance.hideBanner(),
            this._btn_kaishitiaozhan.visible = !1,
            Ie.useShiyong = !1,
            this.OpenGmo())
        }
        btn_richang() {
            Ie.level < 2 || (W.destroyBanner(),
            this.btn_richangReal())
        }
        btn_richangReal() {
            we.levelState != t.Waiting && (this.m_Begin.stop(),
            this.m_StartGame.stop(),
            this.m_ReStartGame.stop(),
            this.m_GameMode2.play(),
            we.instance.specialLevel())
        }
        jingdianReal() {
            we.levelState != t.Waiting && we.instance.LevelEnd()
        }
        btn_jingdian() {
            ve._C_shiyong.visible || W.showBanner(),
            this.btn_jingdianReal()
        }
        btn_jingdianReal() {
            we.levelState != t.Waiting && (this.m_GameMode1.play(),
            we.instance.LevelEnd())
        }
        CloseUi() {
            this.isOpen = !1,
            this._view.visible = !1
        }
        OpenStore() {
            W.destroyBanner(),
            this.OpenStoreReal()
        }
        OpenStoreReal() {
            Le.instance().OpenUi(u.Panel_Store)
        }
        updataUi(e) {
            let i = ne.instance.playerRanking;
            if (0 == Ie.player.m_isAiF && (i += 2),
            this.playerRanking != i && (this.m_mingci.text = i + Ie.nth(i),
            console.log(this.m_mingci.text),
            this.playerRanking = i),
            this.m_Level_Bar.value = e.z / ne.instance.EndPos.z * 100,
            this.m_Level_Bar.value > 5 && (Ie.stageArray[Ie.stageArray.length - 3].gameObject.active = !0),
            this.m_Level_Bar.value > 40) {
                let e = !0;
                if (14 == Ie.level && Ie.useGmo && this.m_Level_Bar.value <= 50 && (e = !1),
                e && (Ie.stageArray[Ie.stageArray.length - 2].gameObject.active = !0,
                0 == Ie.player.m_isAiF && (Ie.player.m_isAiF = !0,
                Ie.stageArray[2].EnemyAutoPosList.length >= 2)))
                    for (let e = 0; e < Ie.playerEnemyList.length; ++e)
                        6 == Ie.playerEnemyList[e].m_RankingNum ? Ie.playerEnemyList[e].transform.position = Ie.stageArray[2].EnemyAutoPosList[1] : 5 == Ie.playerEnemyList[e].m_RankingNum && (Ie.playerEnemyList[e].transform.position = Ie.stageArray[2].EnemyAutoPosList[0])
            }
            if (we.levelState == t.Playing)
                return;
            let a = Date.parse((new Date).toDateString()) + 864e5 - (new Date).getTime()
              , n = a / 1e3 / 60 / 60
              , s = a - 1e3 * (n = Math.floor(n)) * 60 * 60
              , l = s;
            s = s / 1e3 / 60,
            l -= 1e3 * (s = Math.floor(s)) * 60,
            l /= 1e3,
            l = Math.floor(l);
            let o = n.toString()
              , r = s.toString()
              , h = l.toString();
            1 == o.length && (o = "0" + n),
            1 == r.length && (r = "0" + s),
            1 == h.length && (h = "0" + l),
            this.m_remainingTime.text = o + ":" + r + ":" + h;
            let d = N.getDateNum()
              , c = d % 12 + 100;
            Ie.nowTimeNum != d && (Ie.nowTimeNum = d,
            Ie.specialLevel = c,
            w.setItem("specialLevel", d.toString()),
            Ie.specialGold = 0,
            w.setItem("specialGold", Ie.specialGold.toString()),
            Ie.specialGold1 = 0,
            Ie.specialGold2 = 0,
            Ie.specialGold3 = 0,
            Ie.mianfei = 0,
            w.setItem("specialGold1", Ie.specialGold1.toString()),
            w.setItem("specialGold2", Ie.specialGold2.toString()),
            w.setItem("specialGold3", Ie.specialGold3.toString()),
            w.setItem("mianfei", Ie.mianfei.toString()))
        }
        onLeftTick_moving(e) {
            let t = e.x
              , i = e.y;
            Ie.player.m_speedAD = -t * Ie.player.m_speedADCoefficient,
            Ie.player.m_localRotationEulerY = 35 * -t,
            this.keyDownList.JoystickUp = !1,
            this.keyDownList.JoystickDown = !1,
            i < -.5 && (this.keyDownList.JoystickUp = !0),
            i > .5 && (this.keyDownList.JoystickDown = !0),
            this.updateFallSpeed()
        }
        onLeftTick_up() {
            Ie.player.m_speedAD = 0,
            Ie.player.m_localRotationEulerY = 0,
            this.keyDownList.JoystickUp = !1,
            this.keyDownList.JoystickDown = !1,
            this.updateFallSpeed()
        }
        static OpenShiyong() {
            0 != ve.isshiyongOpen && ve._C_shiyong && (ve._C_shiyong.visible = Ie.level >= 2 && Ie.nbTries % 6 == 0,
            ve._C_shiyong.visible || 0 != ne.instance.mlevelType || W.showBanner(),
            Ie.UiSubScene.active = !0,
            T.instance.GetOrInitCamera(101, "Player" + ve.SkinIndex, ve._C_shiyong_n1, 0),
            Ie.refreshShiYongTime = 2e4)
        }
        RefreshShiYong() {
            Ie.canRefreshShiYong && (Ie.refreshShiYongTime < 0 || (Ie.refreshShiYongTime -= Laya.timer.delta,
            Ie.refreshShiYongTime <= 0 && we.levelState == t.WaitPlay && ve.onLoadShiyong()))
        }
        static UpdateShiyong() {
            let e = 0;
            {
                let t = [];
                for (let e = 0; e < 26; ++e) {
                    0 == Ie.IsUnlock(2, e) && t.push(e)
                }
                0 == t.length ? ve.SkinType = 0 : ve.SkinType = t[N.getRandomInt(0, t.length - 1)],
                e += t.length
            }
            {
                let t = [];
                for (let e = 0; e < 26; ++e) {
                    0 == Ie.IsUnlock(0, e) && t.push(e + 1)
                }
                0 == t.length ? ve.SkinIndex = 0 : ve.SkinIndex = t[N.getRandomInt(0, t.length - 1)],
                e += t.length
            }
            {
                let t = [];
                for (let e = 0; e < 19; ++e) {
                    0 == Ie.IsUnlock(1, e) && t.push(e)
                }
                0 == t.length ? ve.DanceIndex = 0 : ve.DanceIndex = t[N.getRandomInt(0, t.length - 1)],
                e += t.length
            }
            return 0 != e && (ve.isshiyongOpen = !0,
            !0)
        }
        static onLoadShiyong() {
            1 == this.UpdateShiyong() ? Laya.Sprite3D.load(Ie.URL + "res/LayaScene_ObjScene/Conventional/Player" + ve.SkinIndex + ".lh", Laya.Handler.create(this, function(e) {
                ve.OpenShiyong()
            })) : ve._C_shiyong && ve._C_shiyong.visible && (ve._C_shiyong.visible = !1)
        }
        useShiyong() {
            console.log("Random skin"),
            Ie.isSdk ? W.rewarded(e => {
                e ? this.useShiyongReal() : this.m_AddFail.play()
            }
            ) : this.useShiyongReal()
        }
        useShiyongReal() {
            Ie.AddVideoNum(200 + ve.SkinType),
            Ie.AddVideoNum(0 + ve.SkinIndex - 1),
            Ie.AddVideoNum(100 + ve.DanceIndex);
            {
                let e = M.shopDataDic[2][ve.SkinType];
                if (null == e)
                    return;
                if (Ie.GetVideoNum(200 + ve.SkinType) >= Number(e.UseVarSub)) {
                    0 == Ie.IsUnlock(2, ve.SkinType) && Ie.Unlock(2, ve.SkinType)
                }
            }
            {
                let e = M.shopDataDic[0][ve.SkinIndex - 1];
                if (null == e)
                    return;
                if (Ie.GetVideoNum(0 + ve.SkinIndex - 1) >= Number(e.UseVarSub)) {
                    0 == Ie.IsUnlock(0, ve.SkinIndex - 1) && Ie.Unlock(0, ve.SkinIndex - 1)
                }
            }
            {
                let e = M.shopDataDic[1][ve.DanceIndex];
                if (null == e)
                    return;
                if (Ie.GetVideoNum(100 + ve.DanceIndex) >= Number(e.UseVarSub)) {
                    0 == Ie.IsUnlock(1, ve.DanceIndex) && Ie.Unlock(1, ve.DanceIndex)
                }
            }
            Ie.player.changeInit(ve.SkinType, ve.SkinIndex, ve.DanceIndex),
            Ie.useShiyong = !0,
            Ie.refreshShiYongTime = 2e4,
            ve.onLoadShiyong()
        }
        CloseShiyong() {
            ve._C_shiyong.visible = !1,
            Ie.UiSubScene.active = !1,
            Ie.useShiyong = !1,
            Laya.timer.clear(this, ve.onLoadShiyong)
        }
        CloseGmo() {
            for (let e = 0; e < Ie.playerEnemyList.length; ++e)
                Ie.playerEnemyList[e].kaishi();
            Ie.player.kaishi(),
            this._C_gmo.visible = !1,
            Ie.openGmo = !1,
            Ie.UiSubScene.active = !1,
            Ie.useShiyong = !1,
            Ie.UiSubScene2.active = !1,
            Ie.level >= 2 && (Ie.nbTries += 1),
            W.gameplayStart(),
            this.CloseShiyong()
        }
        OpenGmo() {
            for (let e = 0; e < Ie.playerEnemyList.length; ++e)
                Ie.playerEnemyList[e].zhanting();
            Ie.player.zhanting(),
            this._C_gmo.visible = !0,
            Ie.openGmo = !0,
            Ie.UiSubScene.active = !0,
            this.m_gmo.play(null, -1, 0),
            Ie.UiSubScene2.active = !0,
            1 === Ie.player.getSkinIndex() ? this._C_gmo_n1.x = this._C_gmo_n1.parent.width / 2 - this._C_gmo_n1.width / 2 : this._C_gmo_n1.x = this._C_gmo_n1.parent.width / 2 - 2 * this._C_gmo_n1.width / 5,
            T.instance.GetOrInitCamera(202, "Player" + Ie.player.getSkinIndex(), this._C_gmo_n1, 1, Ie.player.getSkinIndex()),
            W.destroyBanner(),
            (Ie.level < 2 || (Ie.nbTries + 1) % 5 != 0) && this.CloseGmo()
        }
        useGaiZao() {
            Ie.isSdk ? W.rewarded(e => {
                e ? this.useGaiZaoReal() : this.m_AddFail.play()
            }
            ) : this.useGaiZaoReal()
        }
        useGaiZaoReal() {
            Ie.useGmo = !0,
            Ie.player.superSpeed(),
            this.CloseGmo()
        }
        closeGzylView() {
            se.Instance.ttShowMoreGame()
        }
        openGzylView() {
            se.Instance.m_DY_isOnAwemek ? se.Instance.openAwemeUserProfile() : se.Instance.ttHideMoreGame()
        }
    }
    ve.SkinType = -1,
    ve.SkinIndex = -1,
    ve.DanceIndex = -1,
    ve.isshiyongOpen = !1;
    class Ie extends Laya.Script {
        static nth(e) {
            if (e > 3 && e < 21)
                return "th";
            switch (e % 10) {
            case 1:
                return "st";
            case 2:
                return "nd";
            case 3:
                return "rd";
            default:
                return "th"
            }
        }
        static Unlock(e, t) {
            if (0 == this.IsUnlock(e, t)) {
                if (e == _.StoreType) {
                    let e = N.stringToBytes(this.StoreTypeList);
                    e[t] = 49,
                    this.StoreTypeList = N.byteToString(e)
                } else if (e == _.StoreIndex) {
                    let e = N.stringToBytes(this.StoreIndexList);
                    if (t > e.length)
                        for (var i = e.length; i < t; i++)
                            e[i] = 48;
                    e[t] = 49,
                    this.StoreIndexList = N.byteToString(e)
                } else if (e == _.DanceIndex) {
                    let e = N.stringToBytes(this.DanceIndexList);
                    e[t] = 49,
                    this.DanceIndexList = N.byteToString(e)
                }
                this.saveScore()
            }
        }
        static IsUnlock(e, t) {
            let i;
            return e == _.StoreType ? i = this.StoreTypeList : e == _.StoreIndex ? i = this.StoreIndexList : e == _.DanceIndex && (i = this.DanceIndexList),
            "1" == i.charAt(t) ? 1 : 0
        }
        static readScore() {
            let e = w.getItem("SkinIndex");
            this.SkinIndex = null == e || "" == e ? 0 : Number(e),
            e = w.getItem("level"),
            console.log("temp:" + e),
            this.level = null == e || "" == e || "0" == e ? 0 : Number(e),
            e = w.getItem("nbTries"),
            console.log("temp:" + e),
            this.nbTries = null == e || "" == e || "0" == e ? 0 : Number(e),
            e = w.getItem("specialGold"),
            this.specialGold = null == e || "" == e || "0" == e ? 0 : Number(e),
            e = w.getItem("specialGold1"),
            this.specialGold1 = null == e || "" == e || "0" == e ? 0 : Number(e),
            e = w.getItem("specialGold2"),
            this.specialGold2 = null == e || "" == e || "0" == e ? 0 : Number(e),
            e = w.getItem("specialGold3"),
            this.specialGold3 = null == e || "" == e || "0" == e ? 0 : Number(e),
            e = w.getItem("specialLevel"),
            this.specialLevel = null == e || "" == e || "0" == e ? 0 : Number(e);
            let t = N.getDateNum()
              , i = t % 12 + 100;
            this.nowTimeNum = this.specialLevel,
            this.specialLevel != t ? (this.specialLevel = i,
            w.setItem("specialLevel", t.toString()),
            this.specialGold = 0,
            this.specialGold1 = 0,
            this.specialGold2 = 0,
            this.specialGold3 = 0,
            this.mianfei = 0,
            w.setItem("specialGold", this.specialGold.toString()),
            w.setItem("specialGold1", this.specialGold1.toString()),
            w.setItem("specialGold2", this.specialGold2.toString()),
            w.setItem("specialGold3", this.specialGold3.toString()),
            w.setItem("mianfei", this.mianfei.toString())) : this.specialLevel = i,
            e = w.getItem("SkinType"),
            this.SkinType = null == e || "" == e || "0" == e ? 0 : Number(e),
            e = w.getItem("DanceIndex"),
            this.DanceIndex = null == e || "" == e ? 0 : Number(e),
            e = w.getItem("Gold"),
            this.Gold = null == e || "" == e ? 0 : Number(e),
            e = w.getItem("mianfei"),
            this.mianfei = null == e || "" == e ? 0 : Number(e),
            this.Gold < 0 && (this.Gold = 0),
            e = w.getItem("StoreIndexList"),
            this.StoreIndexList = null == e || "" == e ? "10000000000000000000000000000000000000000000000000000" : e,
            this.StoreIndexList.length <= 34 && (this.StoreIndexList += "0000000000000000000000000",
            w.setItem("StoreIndexList", this.StoreIndexList)),
            e = w.getItem("StoreTypeList"),
            this.StoreTypeList = null == e || "" == e ? "1000000000000000000000000000" : e,
            e = w.getItem("DanceIndexList"),
            this.DanceIndexList = null == e || "" == e ? "1000000000000000000000000000" : e,
            e = w.getItem("jiesuo_SkinType1"),
            ve.SkinType = null == e || "" == e ? -1 : Number(e),
            e = w.getItem("jiesuo_SkinIndex1"),
            ve.SkinIndex = null == e || "" == e ? -1 : Number(e),
            e = w.getItem("jiesuo_DanceIndex1"),
            ve.DanceIndex = null == e || "" == e ? -1 : Number(e)
        }
        static saveScore() {
            w.setItem("SkinIndex", this.SkinIndex.toString()),
            w.setItem("SkinType", this.SkinType.toString()),
            w.setItem("DanceIndex", this.DanceIndex.toString()),
            w.setItem("Gold", this.Gold.toString()),
            w.setItem("level", this.level.toString()),
            w.setItem("nbTries", this.nbTries.toString()),
            w.setItem("specialGold", this.specialGold.toString()),
            w.setItem("StoreIndexList", this.StoreIndexList),
            w.setItem("StoreTypeList", this.StoreTypeList),
            w.setItem("DanceIndexList", this.DanceIndexList)
        }
        static DeBugsaveScore() {
            ve.SkinIndex = -1,
            ve.SkinType = -1,
            ve.DanceIndex = -1,
            w.setItem("jiesuo_SkinIndex1", ve.SkinIndex.toString()),
            w.setItem("jiesuo_SkinType1", ve.SkinType.toString()),
            w.setItem("jiesuo_DanceIndex1", ve.DanceIndex.toString());
            for (let e = 100; e < 120; ++e) {
                let t = "Ranking" + e;
                w.setItem(t, "0")
            }
            this.specialLevel = 0,
            w.setItem("specialLevel", this.specialLevel.toString()),
            this.specialGold = 0,
            this.specialGold1 = 0,
            this.specialGold2 = 0,
            this.specialGold3 = 0,
            this.mianfei = 0,
            w.setItem("mianfei", Ie.mianfei.toString()),
            w.setItem("specialGold", this.specialGold.toString()),
            w.setItem("specialGold1", this.specialGold1.toString()),
            w.setItem("specialGold2", this.specialGold2.toString()),
            w.setItem("specialGold3", this.specialGold3.toString()),
            this.level = 0,
            this.SkinIndex = 0,
            this.specialGold = 0,
            this.specialLevel = 0,
            this.SkinType = 0,
            this.DanceIndex = 0,
            this.Gold = 0,
            this.StoreIndexList = "10000000000000000000000000000000000000000000000000000",
            this.StoreTypeList = "1000000000000000000000000000",
            this.DanceIndexList = "1000000000000000000000000000",
            this.saveScore()
        }
        static GetVideoNum(e) {
            let t = w.getItem("VideoNum" + e);
            return null == t || "" == t ? 0 : Number(t)
        }
        static AddVideoNum(e) {
            let t = w.getItem("VideoNum" + e)
              , i = 0;
            i = null == t || "" == t ? 0 : Number(t),
            i += 1,
            w.setItem("VideoNum" + e, i.toString())
        }
        static GetRanking(e) {
            let t = "Ranking" + e
              , i = w.getItem(t);
            return console.log(e, t, i),
            null == i || "" == i ? 0 : Number(i)
        }
        static AddRanking(e, t) {
            let i = 0;
            i = 1 == t ? N.getRandomInt(1e3, 1500) / 100 : 2 == t ? N.getRandomInt(400, 1e3) / 100 : N.getRandomInt(100, 400) / 100;
            let a = this.GetRanking(e);
            a < 50 && (a = N.getRandomInt(5e3, 7e3) / 100),
            i += a;
            let n = N.getRandomInt(N.getRandomInt(7e4, 100 * i), 10500) / 100;
            n > 100 && (n = N.getRandomInt(9900, 9999) / 100),
            i > n && (i = n);
            let s = "Ranking" + e;
            return w.setItem(s, i.toString()),
            i
        }
        static SkinDanceIndex(e) {
            return [41, 42, 43, 44, 45].indexOf(e) >= 0
        }
    }
    Ie.playerEnemyList = [],
    Ie.playerNum = 0,
    Ie.PlayerToPlayerOff2 = .29,
    Ie.PlayerToPlayerOff3 = .22,
    Ie.restitution = .1,
    Ie.Gold = 0,
    Ie.specialGold = 0,
    Ie.specialGold1 = 0,
    Ie.specialGold2 = 0,
    Ie.specialGold3 = 0,
    Ie.mianfei = 0,
    Ie.SkinType = 0,
    Ie.SkinIndex = 0,
    Ie.defaultSkin = null,
    Ie.DanceIndex = 0,
    Ie.StoreTypeList = "1000000000000000000000000000",
    Ie.StoreIndexList = "100000000000000000000000000000000000000000000000000000000000",
    Ie.DanceIndexList = "1000000000000000000000000000",
    Ie.stageArray = [],
    Ie.EnemyPosList = [],
    Ie.URL = "",
    Ie.isSdk = !0,
    Ie.openSpecialNotice = !1,
    Ie.autoPopHtui = !1,
    Ie.openInterstitial = !1,
    Ie.qqKanDian = !1,
    Ie.openPaiLian = !1,
    Ie.useShiyong = !1,
    Ie.useGmo = !1,
    Ie.endMode1 = !1,
    Ie.refreshShiYongTime = 2e4,
    Ie.canRefreshShiYong = !0,
    Ie.openQQBox = !1,
    Ie.isDouYin = !1,
    Ie.openWuDian = !1,
    Ie.specialNotice = null,
    Ie.noBannerView = 0;
    class be extends e.SpecialNoticeUI {
        onAwake() {}
        onOpened(e) {
            if (this.parent.mouseEnabled = !0,
            we.levelState == t.Playing) {
                for (let e = 0; e < Ie.playerEnemyList.length; ++e)
                    Ie.playerEnemyList[e].zhanting();
                Ie.player.zhanting()
            }
            this.btn_ok.on(Laya.Event.CLICK, this, this.OnClick),
            this.OnClick(),
            se.Instance.hideBanner();
            Ie.openSpecialNotice = !0,
            Ie.noBannerView++
        }
        OnClick() {
            if (console.log("关闭"),
            this.btn_ok.off(Laya.Event.CLICK, this, this.OnClick),
            this.parent.mouseEnabled = !1,
            this.removeSelf(),
            Ie.noBannerView--,
            se.Instance.showBanner(),
            we.levelState == t.Playing && !Ie.openGmo) {
                for (let e = 0; e < Ie.playerEnemyList.length; ++e)
                    Ie.playerEnemyList[e].kaishi();
                Ie.player.kaishi()
            }
        }
    }
    class ke extends e.TipsUI {
        constructor() {
            super(),
            this.width = Laya.stage.width,
            this.height = Laya.stage.height
        }
        onAwake() {
            this.x = 0,
            this.y = 0
        }
        onOpened(e) {
            this.text_tips.text = e,
            this.onLoaded()
        }
        onLoaded() {
            let e = this.g_tips;
            e.alpha = .8;
            let t = Laya.TimeLine.to(e, {
                centerY: -150,
                alpha: 1
            }, 300, Laya.Ease.quadInOut).to(e, {
                centerY: -200,
                alpha: .3
            }, 300, null, 300);
            t.on(Laya.Event.COMPLETE, this, this.RemoveTip),
            t.play(0, !1)
        }
        RemoveTip() {
            this.g_tips.visible = !1,
            Laya.Scene.close("test/PopTip.scene")
        }
    }
    class xe {
        constructor() {}
        static init() {
            var e = Laya.ClassUtils.regClass;
            e("Controller/SpecialNoticeView.ts", be),
            e("Controller/TipUI.ts", ke)
        }
    }
    xe.width = 750,
    xe.height = 1334,
    xe.scaleMode = "fixedheight",
    xe.screenMode = "none",
    xe.alignV = "middle",
    xe.alignH = "center",
    xe.startScene = "LoadingView.scene",
    xe.sceneRoot = "",
    xe.debug = !1,
    xe.stat = !1,
    xe.physicsDebug = !1,
    xe.exportSceneToJson = !0,
    xe.init();
    class Pe extends Laya.Script3D {
        constructor() {
            super()
        }
        onTriggerEnter(e) {
            e.owner.getComponent(F)
        }
    }
    class De {
        constructor() {
            if (window.Laya3D ? Laya3D.init(xe.width, xe.height) : Laya.init(xe.width, xe.height, Laya.WebGL),
            Laya.Physics && Laya.Physics.enable(),
            Laya.DebugPanel && Laya.DebugPanel.enable(),
            Laya.stage.scaleMode = xe.scaleMode,
            Laya.stage.screenMode = xe.screenMode,
            Laya.stage.alignV = xe.alignV,
            Laya.stage.alignH = xe.alignH,
            Laya.URL.exportSceneToJson = xe.exportSceneToJson,
            (xe.debug || "true" == Laya.Utils.getQueryString("debug")) && Laya.enableDebugPanel(),
            xe.physicsDebug && Laya.PhysicsDebugDraw && Laya.PhysicsDebugDraw.enable(),
            xe.stat && Laya.Stat.show(),
            se.Instance.InitSDK(),
            Ie.readScore(),
            Laya.Scene.load("SpecialNotice.scene"),
            Laya.Scene.load("Tips.scene"),
            Laya.Scene.open("LoadingView.scene", !1, null, Laya.Handler.create(this, e => {
                e.parent.zOrder = 999,
                this.progressBar = e.ProgressBar,
                this.frames = [e.frame0, e.frame1, e.frame2, e.frame3],
                console.log("test"),
                console.log(Object.keys(e)),
                this.label_progress = e.label_progress,
                this.noNetTip = e.noNet,
                this.PreloadingRes();
                let t = this;
                this.finishedLoading = !1,
                setTimeout( () => {
                    t.finishedLoading || (t.intervalId = setInterval( () => {
                        if (t.frames.forEach(e => {
                            e.centerX -= 5
                        }
                        ),
                        t.frames[t.frames.length - 1].centerX < -(Laya.stage.get_width() / 2 + 300)) {
                            let e = Math.abs(t.frames[0].centerX) + Laya.stage.get_width() / 2 + 300;
                            t.frames.forEach(t => {
                                t.centerX += e
                            }
                            )
                        }
                    }
                    , 1 / 60))
                }
                , 1e3)
            }
            )),
            window.PokiSDK.gameLoadingStart(),
            null === Ie.defaultSkin) {
                let e = Laya.Loader.getRes(Ie.URL + "res/LayaScene_ObjScene/Conventional/Player1.lh");
                console.log("Trying to get default Skin"),
                null == e ? (console.log("Default Skin needs to be loaded"),
                Laya.Sprite3D.load(Ie.URL + "res/LayaScene_ObjScene/Conventional/Player1.lh", Laya.Handler.create(this, function(e) {
                    console.log("Default Skin has been loaded"),
                    Ie.defaultSkin = e
                }))) : (console.log("Default Skin already exists"),
                Ie.defaultSkin = e)
            }
        }
        onHide() {}
        PreloadingRes() {
            if (!window.navigator.onLine)
                return void (this.noNetTip.visible = !0);
            let e = [{
                url: Ie.URL + p.atlas0,
                type: Laya.Loader.IMAGE
            }, {
                url: Ie.URL + p.atlas1,
                type: Laya.Loader.IMAGE
            }, {
                url: Ie.URL + p.txt,
                type: Laya.Loader.BUFFER
            }, {
                url: o.spead,
                type: Laya.Loader.SOUND
            }, {
                url: o.putong,
                type: Laya.Loader.SOUND
            }, {
                url: o.richang,
                type: Laya.Loader.SOUND
            }];
            Laya.loader.create(e, Laya.Handler.create(this, this.on2DLoaded), Laya.Handler.create(this, e => {
                this.setProgesss(.2 * e)
            }
            ))
        }
        setProgesss(e) {
            this.label_progress.text = "(" + Math.floor(100 * e) + "%)",
            this.progressBar.value = e
        }
        on2DLoaded() {
            Laya.loader.create(["res/subpackage/GameData/RoadData.json", "res/subpackage/GameData/AIData.json", "res/subpackage/GameData/LevelData.json", "res/subpackage/GameData/ShopTypeData.json", "res/subpackage/GameData/ShopIndexData.json", "res/subpackage/GameData/ShopDanceData.json", "res/subpackage/GameData/NameData.json"], Laya.Handler.create(this, this.LoadLevelConfig))
        }
        LoadLevelConfig() {
            M.loadGameData(),
            this.onload3DRes()
        }
        onload3DRes() {
            if (!window.navigator.onLine)
                return void (this.noNetTip.visible = !0);
            console.log("主角加载完成，开始加载主场景");
            let e = ["res/LayaScene_MainScene/Conventional/MainScene.ls", Ie.URL + "res/LayaScene_ObjScene/Conventional/Player" + (Ie.SkinIndex + 1) + ".lh"]
              , t = Ie.level
              , i = 0;
            i = t >= 50 ? N.getRandomInt(10, 49) : t;
            let a = M.LevelDataList[i].LevelData.split("_")
              , n = a.length;
            for (let t = 0; t < n; t++) {
                let i = a[t]
                  , n = Ie.URL + "res/LayaScene_ObjScene/Conventional/" + i + ".lh";
                e.push(n)
            }
            Laya.loader.create(e, Laya.Handler.create(this, this.onLoadSceneComplete), Laya.Handler.create(this, e => {
                this.setProgesss(.2 + .8 * e)
            }
            ))
        }
        onLoadSceneComplete() {
            console.log("主场景加载完成，开始场景实例化"),
            this.setProgesss(1),
            this.finishedLoading = !1,
            this.intervalId && clearInterval(this.intervalId),
            fgui.UIConfig.packageFileExtension = "txt",
            fgui.UIConfig.defaultFont = "Changa One",
            console.log(fgui);
            var e = Laya.stage.addChild(fgui.GRoot.inst.displayObject);
            window.addEventListener("resize", () => {
                for (let e = 0; e < fgui.GRoot.inst._children.length; e++) {
                    fgui.GRoot.inst._children[e].makeFullScreen()
                }
            }
            ),
            console.log(e),
            console.log(fgui.GRoot.inst.displayObject),
            console.log("looking for ", Ie.URL + p.Package),
            fgui.UIPackage.addPackage(Ie.URL + p.Package),
            e.zOrder = 99;
            let t = Laya.Loader.getRes("res/LayaScene_MainScene/Conventional/MainScene.ls");
            Ie.mainScene = t,
            Ie.sceneRoot = Ie.mainScene.getChildByName("SceneRoot"),
            Ie.sceneRoot.addComponent(C),
            Ie.sceneRoot.addComponent(ne),
            Ie.sceneRoot.addComponent(we),
            Ie.sceneRoot.addComponent(Se),
            Ie.UiScene = new Laya.Scene3D,
            Laya.stage.addChild(Ie.UiScene),
            (i = Ie.UiScene.addChild(new Laya.DirectionLight)).color = new Laya.Vector3(1,250 / 255,235 / 255),
            i.transform.rotationEuler = new Laya.Vector3(-115,-55,0),
            i.intensity = .48,
            i.shadowDistance = 1,
            Ie.UiScene.ambientColor = new Laya.Vector3(.77,.77,.77),
            i.shadowResolution = 2048,
            i.shadowMode = Laya.ShadowMode.None,
            Ie.UiSubScene = new Laya.Scene3D,
            Laya.stage.addChild(Ie.UiSubScene),
            (i = Ie.UiSubScene.addChild(new Laya.DirectionLight)).color = new Laya.Vector3(1,250 / 255,235 / 255),
            i.transform.rotationEuler = new Laya.Vector3(-115,-55,0),
            i.intensity = .48,
            i.shadowDistance = 1,
            Ie.UiSubScene.ambientColor = new Laya.Vector3(.77,.77,.77),
            i.shadowResolution = 2048,
            i.shadowMode = Laya.ShadowMode.None,
            Ie.UiSubScene1 = new Laya.Scene3D,
            Laya.stage.addChild(Ie.UiSubScene1),
            (i = Ie.UiSubScene1.addChild(new Laya.DirectionLight)).color = new Laya.Vector3(1,250 / 255,235 / 255),
            i.transform.rotationEuler = new Laya.Vector3(-115,-55,0),
            i.intensity = .48,
            i.shadowDistance = 1,
            Ie.UiSubScene1.ambientColor = new Laya.Vector3(.77,.77,.77),
            i.shadowResolution = 2048,
            i.shadowMode = Laya.ShadowMode.None,
            Ie.UiSubScene1.active = !1,
            Ie.UiSubScene2 = new Laya.Scene3D,
            Laya.stage.addChild(Ie.UiSubScene2),
            (i = Ie.UiSubScene2.addChild(new Laya.DirectionLight)).color = new Laya.Vector3(1,250 / 255,235 / 255),
            i.transform.rotationEuler = new Laya.Vector3(-115,-55,0),
            i.intensity = .48,
            i.shadowDistance = 1,
            Ie.UiSubScene2.ambientColor = new Laya.Vector3(.77,.77,.77),
            i.shadowResolution = 2048,
            i.shadowMode = Laya.ShadowMode.None,
            Ie.UiSubScene2.active = !1;
            for (let e = 0; e < Ie.sceneRoot.numChildren; e++) {
                let t = Ie.sceneRoot.getChildAt(e);
                switch (t.name) {
                case "Camera":
                    t.addComponent(O),
                    t.active = !0;
                    break;
                case "Light":
                    var i;
                    (i = Ie.mainScene.addChild(new Laya.DirectionLight)).color = new Laya.Vector3(1,250 / 255,235 / 255),
                    i.transform.rotationEuler = new Laya.Vector3(-115,-55,0),
                    i.intensity = .48,
                    i.shadowStrength = .4,
                    i.shadowDistance = 5,
                    i.shadowResolution = 2048,
                    i.shadowMode = Laya.ShadowMode.None,
                    t.active = !1;
                    break;
                case "sea":
                    t.getComponent(Laya.PhysicsCollider).isTrigger = !0,
                    t.addComponent(Pe),
                    t.active = !0;
                    break;
                case "Player":
                case "playerEnemy0":
                case "playerEnemy1":
                case "playerEnemy2":
                case "playerEnemy3":
                case "playerEnemy4":
                    t.active = !1,
                    t.addComponent(F),
                    E.prefabDic[t.name] = t;
                    break;
                case "Player1":
                case "PlayerLeft1":
                case "PlayerRight1":
                    break;
                case "UICameraRoot":
                    t.active = !0,
                    t.addComponent(T);
                    break;
                case "SprayNew":
                    t.active = !1,
                    t.transform.localScale = new D(.5,.5,.5),
                    Ie.Spray = t;
                    break;
                default:
                    t.active = !1,
                    t.addComponent(ae),
                    E.prefabDic[t.name] = t
                }
            }
            console.log("场景实例化完成，0.5秒后进游戏"),
            Laya.timer.once(1, this, () => {
                Laya.stage.addChild(Ie.mainScene),
                ne.instance.newloadLevel(Ie.level, 0)
            }
            )
        }
    }
    function loadFont(e, t, i, a) {
        return new Promise( (n, s) => {
            let l = {
                family: e
            };
            i && (l.weight = "bold"),
            a && (l.style = "italic"),
            new self.FontFace(e,`url(${t})`,l).load().then(function(i) {
                document.fonts.add(i),
                console.log(`Font ${e} has been loaded (${t})`),
                n()
            }).catch(function(e) {
                console.error(e),
                s()
            })
        }
        )
    }
    Promise.all([loadFont("Changa One", "fonts/Changa-Regular.woff2", !1, !1), loadFont("Changa One", "fonts/Changa-Italic.woff2", !1, !0), loadFont("Changa One", "fonts/Changa-Bold.woff2", !0, !1)]).then( () => {
        !function(e, t) {
            var i, a, n;
            a = !1,
            (i = document.createElement("script")).type = "text/javascript",
            i.src = e,
            i.onload = i.onreadystatechange = function() {
                a || this.readyState && "complete" != this.readyState || (a = !0,
                t())
            }
            ,
            (n = document.getElementsByTagName("script")[0]).parentNode.insertBefore(i, n)
        }("./poki-sdk.js", () => {
            W.init().then( () => {
                console.log("Poki SDK successfully initialized"),
                new De
            }
            ).catch( () => {
                console.log("Initialized, but the user likely has adblock"),
                new De
            }
            )
        }
        )
    }
    )
}();

import {Page} from '@/components/Page'
import {Title} from '@/components/Title'
import {getArticleInfo, getStartPage} from '@/app/2024/articleInfo'

export function Quisty() {
  const info = getArticleInfo('quisty')
  const startPage = getStartPage(info.id)

  return (
    <div id={info.id}>
      <Page pageNumber={startPage}>
        <Title articleInfo={info} titleFontSize={'1.68rem'}/>
        <h2>面接、転職の「異変」たち</h2>
        <section>
          <h3>「ボーナスはねー、多分契約（社員）でも年1回は出るんじゃない？」</h3>
          <dl>
            <dt>【見つけた異変】</dt>
            <dd>面接官の管理職社員の説明と、書類の内容に相違があった。</dd>
            <dt>【起きた事】</dt>
            <dd>派遣から契約社員雇用の採用の面接。
              社内で見慣れた部長はそう言った。
              面接に受かった後の契約書にはボーナスの記載はなかった。
            </dd>
            <dt>【教訓】</dt>
            <dd>自分に有利、不利問わず、
              面接の説明内容と書面が異なる場合、
              人事に対してハッキリと相違点の確認を行う。
              返答によっては雇用の辞退や関係各所への相談を進める。
            </dd>
            <dt>【個人的感想】</dt>
            <dd>その時、人事と部長と上司に対して強く言うべきだったのだ。
              書類と説明の整合性が取れていないのは大変に良くない。
              この後悔は次に生かさないといけない。
            </dd>
          </dl>
        </section>
        <section>
          <h3>「へー、こんな経歴なのね。じゃ、次の会議あるから退席するね」</h3>
          <dl>
            <dt>【見つけた異変】</dt>
            <dd>社長が最終面接で最後まで同席しない。</dd>
            <dt>【起きた事】</dt>
            <dd>入社の最終面接で社長が遅れてきて、少し書類に目を通して直ぐに退室した。</dd>
            <dt>【教訓】</dt>
            <dd>社長が最終面接を途中退出、ひっかかる言い回し。
              未来の社員かも知れない人の判断を全部任せる、ずっと同席するを選ばず、
              途中入場、途中退出であった。
              言い回しに雇う側とは言え違和感があったら、
              改めて検討をする。
            </dd>
            <dt>【個人的感想】</dt>
            <dd>そんな事を言って対面の最終面接をすぐに退席する社長。
              面接の序盤で社長が退室する時、礼儀はあったのか、理由はあったのか、
              これから入社する社員に対しての対応がソレなのか。
              これは何かおかしいと思ったら、食い扶持とか、生活という天秤があっても引き返すべきだったのかも知れない。
            </dd>
          </dl>
        </section>
        <section>
          <h3>「プロジェクトマネージャー？こっちはAさんのリーダー引継ぎって聞いてますよ」</h3>
          <dl>
            <dt>【見つけた異変】</dt>
            <dd>数回の面接で説明を受けた仕事、役職と、
              入社後に開発が人事から聞いていた役職が違う。
            </dd>
          </dl>
        </section>
      </Page>
      <Page pageNumber={startPage + 1}>
        <section>
          <dl>
            <dt>【起きた事】</dt>
            <dd>入社２日目、どうにも１日目のリーダーの様子がおかしい。プロマネと聞いていたはずなのに、プロマネがいる。
              プロマネ２人体制にするほどの人数とPJ規模でもない。
              ２日目の朝から既にいたプロマネに説明を求めたところ、
              「プロジェクトマネージャー？こっちはAさんのリーダー引継ぎって聞いてますよ」
              と、いわれた。
              その他、引継ぎの期間や条件、PJ体制で不明瞭な点を確認した。
              ２週間後、もっと凄い異変に遭遇するがそれはまた別の話。
            </dd>
            <dt>【教訓】</dt>
            <dd>面接と契約書、実務が大きく異なる時は声を上げないといけない（2回目）
              チャンスかもしれない。でも、「間違いなく」「騙されている」「異変」なのだ。
            </dd>
            <dt>【個人的感想】</dt>
            <dd>聞いた話と違うじゃないか！そう声を上げて、説明を人事に聞き直さないといけない。
              もしかしたらその事実がばれた瞬間、人事は自主退社するかもしれないし。
            </dd>
          </dl>
        </section>
        <section>
          <h3>「36協定なんで無くなればいいんですよ」</h3>
          <dl>
            <dt>【見つけた異変】</dt>
            <dd>上司が多大な残業をして当たり前、労働基準法を守らない旨の発言をする。</dd>
            <dt>【起きた事】</dt>
            <dd>上流工程の大幅遅延で開発が火の車状態。
              工数が通常通りでは足らず、土日出社や残業も視野になるだろうと
              進捗確認定例で話をしている中で、
              上司は「こんな問題、すぐに解決できますよ」と自信に満ちた声で言い放った。
              「みんな残業して、土日出社して、無断残業すればいいんです。」
              「僕は常日頃、３６協定なんて無くなればいいと思っていますよ。」
            </dd>
            <dt>【教訓】</dt>
            <dd>どんな立場だろうと、この瞬間から録音して、社内法務と社外相談口へ駆け込みましょう。
              また、このような状況を毎回繰り返しているけど、どうにかで乗り越えられている事を
              「自分の業績」と誇る上司たちは周りと結託して対策するべきだ。
              ただ、効果的な具体案はわからない。
            </dd>
            <dt>【個人的感想】</dt>
            <dd>無くなればいい！じゃなくて、守るようにするのが上司の役目ですよ？
              自分が率先して在宅で残業時間で副業平行してるのは違いますよ？
              個人の感想と見解ですけど！
            </dd>
          </dl>
        </section>
        <section>
          <h3>「こっちはみなし残業代を払っているんだから、その分は全部働いて当たり前だろう？」</h3>
          <dl>
            <dt>【見つけた異変】</dt>
            <dd>みなし残業代を理由に、従業員に過度な労働を強いることは、労働契約法に定める「労働条件の変更」に関する規定に違反する可能性がある。
              みなし残業代を理由に、従業員に無理な要求をしたり、精神的な圧力をかけることは、パワーハラスメントに該当する可能性がある。
            </dd>
            <dt>【起きた事】</dt>
            <dd>人事部長との定例会。開発の工数不足の話になった時、「派遣が足りないなら社員が残業すればいい。こっちはみなし残業払っているんだから、社員はその限界まで働いて当然、当たり前だろう？」と人事部長は言った。</dd>
            <dt>【教訓】</dt>
            <dd>その場で法令を検索して、反論する手もあったと思われる。
              ただし、その会議の本題に沿っているから改めて認識する必要がありますし、
              人が多い会議の場合、人事部長の立場的なところで沈黙が正解である事もあります。
              社内法務と人事、社内衛生委員会に通報するという手段もある。はい。
            </dd>
          </dl>
        </section>
      </Page>
      <Page pageNumber={startPage + 2}>
        <section>
          <dl>
            <dt>【個人的感想】</dt>
            <dd>ITパスポートにも書いてあるくらいの基礎なんだから、人事部長ならそのくらい知っていて欲しい。
              それをやっていくと36協定にすぐに引っ掛かりますし、
              みなし残業の本質は働かせ放題ではなく、他の経費を落とすためです。
              また、その発言は十分にパワハラに該当します。
              ちょっと調べればわかる事なので、払う側ならなおさらにこの辺りの仕組みは知っていてください。
            </dd>
          </dl>
        </section>
        <section>
          <h3>「あの人たちみなし残業分を働いてないから、働かせないと会社は損ですよ！」</h3>
          <dl>
            <dt>【見つけた異変】</dt>
            <dd>従業員の労働時間の管理義務違反。
              みなし残業時間を使い切ることを前提とした計画は、従業員との間の労働契約に定められた労働条件を一方的に変更しようとするものであり、労働契約法違反に該当する可能性がある。
            </dd>
            <dt>【起きた事】</dt>
            <dd>各部署のリーダー、進行管理が集まる進捗確認ミーティングで工数がとても足りないという話を先に切り出したら、
              「あの人たちみなし残業分を働いてないから、働かせないと会社は損ですよ！」
              とマネージャーが言い始めた。
            </dd>
            <dt>【教訓】</dt>
            <dd>不当な要求には記録を残し、周囲に相談を。労働法を学び、自分の権利を守りながら、問題があれば会社に改善を求めましょう。声を出すことで、より良い職場環境を作ることができ、それはより良いゲームへ繋がります。</dd>
            <dt>【個人的感想】</dt>
            <dd>そういう対応はスケジュールとしてとてもリスキーで、
              管理能力の欠如に当たる行為なので上に立つものとして恥じてください。
              そもそも1日8時間超過が残業になるのは、
              通常の人間の構造と人間的生活を守る上で、8時間が限度だからですよ？
            </dd>
          </dl>
        </section>
        <section>
          <h3>次々に浴びせる小難しい質問、重箱の隅をつつき続ける言い回し。解答に対して納得していない表情と言い回し。見下すような言い切り。</h3>
          <dl>
            <dt>【見つけた異変】</dt>
            <dd>専門知識の不足を隠しながらの誇示と受験者の自信を揺るがす質問の連続。</dd>
            <dt>【起きた事】</dt>
            <dd>転職の面接にいた部長から、次々と小難しい質問、重箱の隅をつつき続ける言い回しが来た。
              ただし、聞くばかりで「そうなのね」としか言わない。
              解答に対して納得していない表情と言い回しが多く、見下すような言い切りもする。
            </dd>
            <dt>【教訓】</dt>
            <dd>圧迫面接をする会社には入らなくていい。</dd>
            <dt>【個人的感想】</dt>
            <dd>あからさまな圧迫面接はろくな会社じゃないので、お金に困っていても辞めた方がいいです。
              その部署だけなのかもしれないけど、その人が上司になるなら断りましょう。
              あなたという命と人生の時間に替えは無いのです。
              その人と共に過ごす事で学べる事もあるかも知れませんが。
              後、その回答を別の人に対し「自分の見解」として話をしている可能性もありますが、
              話の根底、バックグラウンドがないので重みや整合性が足りなくなっています。
            </dd>
          </dl>
        </section>
        <section>
          <h3>「子供のインフルエンザごときで欠勤するなんて」</h3>
          <dl>
            <dt>【見つけた異変】</dt>
            <dd>家族の看病で欠勤するアルバイトを会議の場であざけわらった</dd>
          </dl>
        </section>
      </Page>
      <Page pageNumber={startPage + 3}>
        <section>
          <dl>
            <dt>【起きた事】</dt>
            <dd>定例人事会議で話題に上がった子持ちの主婦アルバイト。幅広い知識は部署を超えて重宝されている状況だった。
              そのスキルをリーダーが褒めたがその日はたまたま子供のインフルエンザでそのアルバイトは欠勤していた。話を聞いた部長は「子供のインフルエンザごときで欠勤するなんて」と、あざけわらった。
              口が悪いにしてもモノには限度がある。リーダーはその場で発言の訂正を求めた。
            </dd>
            <dt>【教訓】</dt>
            <dd>家族の看病という社会の根底を否定する発言を行わない。
              野放しにしない。
            </dd>
            <dt>【個人的感想】</dt>
            <dd>インフルエンザごとき、ってどういうことですか？
              リーダー以上が集まる会議の場で部長が言った話らしいのですが、
              子供が病気になった時に休んでいる事をネタにされたままで誰も指摘しないのであれば、
              その会社の治安は終わっていると思います。
            </dd>
          </dl>
        </section>
        <section>
          <h3>「24時間いつでも返事をしてくれ」</h3>
          <dl>
            <dt>【見つけた異変】</dt>
            <dd>業務委託契約の会社で、給与アップの条件として２４時間の即答体制を求められた。</dd>
            <dt>【起きた事】</dt>
            <dd>業務委託で毎日４時間相当の労働という話での契約。半分の給与ならば、あと半分は他の仕事をする、その間はスマホの返答や対応はできないという認識でいた。
              だが、雇用主はその状況が理解できず、当たり前のように「２４時間いつでも返事をしてくれ」と要求してきた。
            </dd>
            <dt>【教訓】</dt>
            <dd>労働基準法を超えた労働は自己成長の為、自己のクオリティアップのために自主的に行うことがあっても、他人に強要してはいけない。
              また、勤務に至る家庭状況、環境理由はその人事担当、人事部長権限者の常識を上書きする事は基本的にできないので、毎回最初と最後に伝える。
            </dd>
            <dt>【個人的感想】</dt>
            <dd>ま、２４時間返答できることというのは、本来なら待機なので給与が発生するのですけどね。
              タイミーでも待機メインのバイトがあるくらいなのですよ？
            </dd>
          </dl>
        </section>
        <h2>引き返すことができた「異変」</h2>
        <section>
          <h3>契約書が文字化けしている、直した契約書の文字コードがスマホで開けない物、３度目の提出の契約書の合間に全く関係ない大きく不利益な文面が入っている</h3>
          <dl>
            <dt>【見つけた異変】</dt>
            <dd>契約書に大きく不利益になる文面が入っているのにもかかわらず、読みにくいように壊れたファイルを２度送付してくる。</dd>
            <dt>【起きた事】</dt>
            <dd>給料が少なくて困っていると上司に相談したところ、自分の副業事業を手伝ってほしいという話をもらった。
              契約書を取り交わそうという話になり、メールで送付をお願いしたところ、最初のファイルは破損していて完全に文字化けしていた。
              これは読めないので契約をかわすことはできないと回答すると、今度はスマホではうまく表示できない文字コードの書類が送付された。
              念のため、「UTF-8」の文字コードの書類も送付してほしいと依頼し、PCで確認したところ、文書の中盤に最初の話には入っていなかった、人権無視に値する不愉快な言い回しの契約内容が記載されていた。
            </dd>
            <dt>【教訓】</dt>
            <dd>正式な雇用、仕事の取り決めの契約書は全て目を通すこと。</dd>
          </dl>
        </section>
      </Page>
      <Page pageNumber={startPage + 4}>
        <section>
          <dl>
            <dt>【個人的感想】</dt>
            <dd>なんで見逃してもらえると思ったんですか？
              なんで最初は文字化けしていたんですか？
              読まないで契約すると思ったんですか？
            </dd>
          </dl>
        </section>
        <h2>転職、面接などの「異変」から「働く」という事を考える何か</h2>
        <section>
          <h3>「まぁ、働けて、お金がもらえているならいいや。」という考えは後々に自分を追い込むことになる。</h3>
          <p>それを防ぐために労働に関する法整理がある。
            過去の人々の英知を自分の健康的でまっとうな労働に生かそう。
            直ぐに言葉が出てこなくても、できるだけ早急に適切なところへ相談を進めよう。
            その記録は録音しておこう。
            「録音しておけば十分に訴えることができる話」だったりするかもしれないから。
          </p>
        </section>
        <section>
          <h3>その一方で「辞めてもバイトでどうにかつないでいこう……」は絶対に良くない</h3>
          <p>何が何でも転職先を見つけてから仕事を辞めるべきなのです。
            派遣社員で1か月先の保証がないならば、
            常に次の仕事を探し続ける気持ちでも損はないのかも知れない。
            派遣らしいキャリアのつなぎ方。あるのかも。
          </p>
        </section>
        <h2>終わりに</h2>
        <p>サイバーな電子関連業界の片隅で
          メタル、鉄のような硬い意志を持った上司、責任者たち。
          その人たちのチンピラ発言に振り回されないで、
          こっちがサイバーメタルチンピラでありながらも、
          心の奥底に諦めない夢をもって突き進んで行きたいです。
        </p>
        <p>でも、転職活動の出口って本当にどこですか？<br/>
          ※この話は現実の話を題材にしたフィクションです
        </p>
      </Page>
    </div>
  )
}

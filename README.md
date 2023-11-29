# vanilla-js-modal

## 使用方法
- `modal.css`と`modal.js`をHTMLファイルに読み込む.

- 以下の構造をHTMLファイルに記述する.
  - クラス名も指定のものにしてください.
```html
<div class="modal_wrapper">
  <div class="modal_overlay"></div>
  <div class="modal_content">

  </div>
</div>
```

- `modal_wrapper`クラスを持つdivに, `data-modal-name`属性を持たせる.
  - 値は任意です.
  - モーダルを複数設置する場合, 他のモーダルの値と重複しないようにしてください.

- モーダルの内容を`modal_content`の子要素として配置する.

- モーダルを開く機能を持たせたいものに`data-modal-open`属性, モーダルを閉じる機能を持たせたいものに`data-modal-close`属性を持たせる.
  - 値は`data-modal-name`と揃えてください.
  - 同じ値を持つ要素が複数存在しても構いません.

- jsファイルに`setModal('your-modal-name');`を記述する.

## 使用例 (sampleディレクトリ内)
[github.io](https://pisces2336.github.io/vanilla-js-modal/sample/)
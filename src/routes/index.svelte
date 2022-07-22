<script>
  import { collection, addDoc } from "firebase/firestore"; 
  import {db} from '$lib/firebase.js';
  let form = {
    choice_field: "",
    desc_field: "",
    del_point_field: 0,
    point_field: 0,
  };

  let sentQuiz = async () => {
    const quizRef = await addDoc(collection(db, "quiz"), {
      "choice": choice,
      "description": form.desc_field,
      "del_point": -form.del_point_field,
      "point" : form.point_field,
      "submited_user": [],
      "created_at": new Date(),
    });
    if (quizRef) {
      alert("Quiz added");
    } else {
      alert("Error");
    };
  };

  let choice = [
  ];

  let addchoice  = (name) => {
    if (name == null || name == "") {
      return;
    }
    choice.push({
      value: name,
      status: false
    });
    form.choice_field = "";
    choice = choice;
  }

  let removechoice = (index) => {
    choice.splice(index, 1);
    choice = choice;
  }
</script>

<svelte:head>
  <title>Quiz Editor</title>
</svelte:head>

<div class="flex w-screen h-screen items-center justify-center">
  <div class="w-full h-full p-12 overflow-scroll">
    <h1>Preview</h1>
    <iframe class="w-full h-96 outline outline-1 rounded" srcdoc={form.desc_field} frameborder="0" title="Preview"></iframe>
    <h1>Desc</h1>
    <textarea bind:value={form.desc_field} class="w-full outline outline-1 rounded" name="" id="" cols="30" rows="10"></textarea>
    <h1>point</h1>
    <input bind:value={form.point_field} class="w-full outline outline-1 rounded" type="number">
    <h1>del_point</h1>
    <input bind:value={form.del_point_field} class="w-full outline outline-1 rounded" type="number">
    <h1>Choice</h1>
    <div class="w-full px-4 py-2 rounded outline outline-1">
      <input type="text" class="outline outline-1 rounded w-2/3" bind:value={form.choice_field}>
      <button class="w-10 h-10 rounded-2xl bg-green-500" on:click={() => {addchoice(form.choice_field)}}>+</button>
      <div class="w-full h-auto overflow-scrol">
        {#each choice as item, key}
          <div class="w-full p-2">
            <input type="checkbox" bind:checked={item.status}>
            <input type="text" class="outline outline-1 rounded w-2/3" bind:value={item.value}>
            <button class="w-10 h-10 rounded-2xl bg-red-500" on:click={() => {removechoice(key)}}>-</button>
          </div>
        {/each}
      </div>
    </div>
    <div class="w-full mt-2 flex justify-end">
      <button on:click={() => {sentQuiz()}} class="bg-blue-600 p-3 rounded-2xl text-white">Sent</button>
    </div>
  </div>
</div>

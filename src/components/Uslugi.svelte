<script>
  import Button from 'smelte/src/components/Button';

  import { authStore } from '../stores/auth';


  function newlead() {
      var myHeaders = new Headers();
      //myHeaders.append("Cookie", "PHPSESSID=zNVB2XyCw0Y2rQaJRa5BF8SUs1yhnjI5; qmb=.; BITRIX_SM_SALE_UID=4");

      var formdata = new FormData();

      var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: formdata,
          redirect: 'follow',
      };

      fetch(
          'https://urtitan.bitrix24.ru/rest/6/nukdgqcdzapnn3xy/crm.lead.add.json?fields[TITLE]=Лид с сайта - услуга 1 - ' +
              $authStore.user.displayName +
              '&fields[NAME]	=' +
              $authStore.user.displayName +
              '&fields[OPENED]=Y&fields[EMAIL][0][VALUE]=' +
              $authStore.user.email,
          requestOptions,
      )
          .then((response) => response.text())
          .then((result) => console.log(result))
          .catch((error) => console.log('error', error));
  }
</script>

<style>
  .bg-dots {
      background-image: url(https://dev.urtitan.ru/bg-dots.svg);
      background-repeat: no-repeat;
  }
</style>

<svelte:head>
  <title>Анализ ситуации, консультация</title>
</svelte:head>

<div class="m-auto max-w-6xl p-8">
  <div class="flex flex-col md:flex-row">
      <div class="md:w-1/2 max-w-6xl flex flex-col justify-center">
          <div class="md:text-4xl text-2xl uppercase font-black">
              Анализ ситуации. Консультация юриста.
          </div>
          <div class="text-xl mt-4">
              Срочно нужна консультация юриста? Нажмите кнопку «Запрос помощи» и введите номер телефона — юрист перезвонит в течение 5 минут!
          </div>
          <div class="my-5 h-8">
              <Button href="/" on:click={newlead}>Запрос правовой помощи</Button>
          </div>
          <a href="analis"
          class="shadow-md my-8 px-4 py-2 text-yellow-100 cursor-pointer
                      bg-yellow-600 hover:bg-yellow-500 rounded text-sm text-center w-48">
                  ПОДРОБНЕЕ
        </a>
      </div>
      <div class="flex md:justify-end w-full md:w-1/2 -mt-5">
          <div class="bg-dots">
              <div class="shadow-2xl max-w-md z-10 rounded mt-6 ml-4">
                  <div class="text-2xl p-10">
                      Первичная консультация юриста часто подразумевает проведение правового
                      анализа текущей ситуации.<br> В зависимости от пожеланий клиента результаты
                      анализа предоставляются в устной или письменной форме.
                  </div>
              </div>
          </div>
      </div>
  </div>
  <br />
  <hr />
  <br /><br />
  <div class="flex flex-col md:flex-row">
    <div class="md:w-1/2 max-w-6xl flex flex-col justify-center">
        <div class="md:text-4xl text-2xl uppercase font-black">
            Составление исковых заявлений.
        </div>
        <div class="text-xl mt-4">
            Нужна помощь в составлении заявления? Нажмите кнопку «Запрос помощи» и введите номер телефона — юрист перезвонит в течение 5 минут!
        </div>
        <div class="my-5 h-8">
            <Button href="/" on:click={newlead}>Запрос правовой помощи</Button>
        </div>
        <a href="analis"
        class="shadow-md my-8 px-4 py-2 text-yellow-100 cursor-pointer
                      bg-yellow-600 hover:bg-yellow-500 rounded text-sm text-center w-48">
                  ПОДРОБНЕЕ
      </a>
    </div>
    <div class="flex md:justify-end w-full md:w-1/2 -mt-5">
        <div class="bg-dots">
            <div class="shadow-2xl max-w-md z-10 rounded mt-6 ml-4">
                <div class="text-2xl p-10">
                    Исковое заявление призвано защитить права истца. При его подаче нужно учесть множество факторов. Заявление составляют согласно определенной законодательством форме.
                </div>
            </div>
        </div>
    </div>
</div>
</div>

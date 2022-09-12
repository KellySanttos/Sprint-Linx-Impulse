import React from 'react';

const FriendForm = () => {
    function sending(e) {
      e.preventDefault();
      alert('Amigo Convidado!');
    }

    return (
        <form className={S.form}>
          <p className={S.p}>
            Quer que seus amigos também ganhem a lista personalizada deles? Preencha
            agora!
          </p>

          
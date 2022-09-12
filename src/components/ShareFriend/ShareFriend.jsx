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

          <section className={S.section}>
        <div className={S.divInput}>
          <Label texto="Nome do amigo:" />
          <Input type="text" />
        </div>
        
        <div className={S.divInput}>
          <Label texto="E-mail do amigo:" />
          <Input type="email" />
        </div>
      </section>
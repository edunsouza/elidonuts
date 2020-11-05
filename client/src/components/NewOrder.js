import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

import { useRootContext } from './RootContext';

import { ButtonPrimary, ButtonSecondary, CardPrimary } from './utils/custom';
import Slider from './utils/Slider';
import Loader from './utils/Loader.js';
import DonutBox from './DonutBox';
import ProductSelector from './ProductSelector';

import { ReactComponent as Icon1 } from '../common/images/donuts-types/donut-type-3.svg';
import './NewOrder.scss';

const BOX_BIG_SIZE = 'BIG';
const BOX_SMALL_SIZE = 'SMALL';
const STEP_ONE_SELECT_BOX = 0;
const STEP_TWO_SELECT_DONUTS = 1;
const STEP_THREE_SELECT_SIZE = 2;
const STEP_FOUR_FINISH = 3;

export default function NewOrder() {
    const { store, dispatch } = useRootContext();
    const [isModalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [modalTitle, setModalTitle] = useState('');
    const [modalAction, setModalAction] = useState(null);
    const goForwards = () => dispatch('SET_ORDER_STEP', Math.min(orderSteps.length - 1, store.orderStep + 1));
    const goBackwards = () => dispatch('SET_ORDER_STEP', Math.max(0, store.orderStep - 1));
    const selectBox = size => {
        dispatch('SET_BOX_IN_PROGRESS', { size: size === BOX_BIG_SIZE ? 6 : 2 });
        goForwards();
    };
    const orderSteps = [
        {
            title: 'Vamos começar escolhendo a quantidade por caixa',
            sub: '(Deseja incluir mais caixas? Podemos fazer isso depois!)'
        },
        {
            title: `Agora vamos escolher os ${store.boxInProgress.size} donuts desta caixa`,
            sub: '(Se desejar, podemos diversificar os sabores. Basta escolher!)'
        },
        {
            title: 'Por último, escolha o tamanho dos donuts desta caixa',
            sub: '(Você pode duplicar esta caixa com os mesmos sabores!)'
        },
        {
            title: 'Tudo certo! O que deseja fazer agora?',
        },
    ];
    const closeModal = () => setModalVisible(false);
    const decrementBox = id => {
        // const product = store.products.find(p => p.id === id);
    };
    const fillBox = id => {
        const product = store.products.find(p => p.id === id);
        setModalTitle('Completar caixa');
        setModalMessage(`Completar a caixa com donuts do tipo ${product.name}?`);
        setModalAction(() => () => {
            alert(`modal action: fillBox(${product.name})`);
            closeModal();
        });
        setModalVisible(true);
    };
    const incrementBox = id => {
        // const product = store.products.find(p => p.id === id);
    };

    useEffect(() => {
        if (!store.products.length && store.orderStep === STEP_TWO_SELECT_DONUTS) {
            (async () => {
                try {
                    const { data } = await axios.get(`${process.env.REACT_APP_ROOT}/api/test`);
                    dispatch('SET_PRODUCTS', data || []);
                } catch (e) {
                    setModalTitle('Erro');
                    setModalMessage(`Não foi possível carregar lista de donuts.`);
                    setModalAction(() => () => closeModal());
                    setModalVisible(true);
                }
            })();
        }
    }, [store.orderStep, store.products, dispatch]);

    const modalFooter = (
        <div>
            <ButtonSecondary size="sm" onClick={closeModal}>Cancelar</ButtonSecondary>
            <ButtonPrimary size="sm" onClick={modalAction}>Continuar</ButtonPrimary>
        </div>
    );

    return (
        <>
            <Dialog modal visible={isModalVisible} onHide={closeModal} header={modalTitle} footer={modalFooter}>
                <h2 className="subtitle2">{modalMessage}</h2>
            </Dialog>
            <Slider className="new-order" activeIndex={store.orderStep}>

                <div className="card-step">
                    <CardPrimary>
                        <CardPrimary.Header>
                            <div className="p-d-flex p-jc-end p-mb-4">
                                <span className="p-tag p-mb-2">Passo 1 / 3</span>
                            </div>
                            <h1 className="subtitle2">{orderSteps[STEP_ONE_SELECT_BOX].title}</h1>
                            <p className="text1">{orderSteps[STEP_ONE_SELECT_BOX].sub}</p>
                        </CardPrimary.Header>
                        <CardPrimary.Content className="box-choice">
                            <div className="box-option">
                                <DonutBox size={2} onClick={() => selectBox(BOX_SMALL_SIZE)} />
                            </div>
                            <div className="box-option">
                                <DonutBox size={6} onClick={() => selectBox(BOX_BIG_SIZE)} />
                            </div>
                        </CardPrimary.Content>
                    </CardPrimary>
                </div>

                <div className="card-step">
                    <CardPrimary>
                        <CardPrimary.Header>
                            <div className="p-d-flex p-jc-between p-mb-4">
                                <Button onClick={goBackwards} icon="pi pi-arrow-left" className="back-button p-shadow-4 p-button-rounded p-button-secondary" />
                                <span className="p-tag p-mb-2">Passo 2 / 3</span>
                            </div>
                            <h1 className="subtitle2">{orderSteps[STEP_TWO_SELECT_DONUTS].title}</h1>
                            <p className="text1">{orderSteps[STEP_TWO_SELECT_DONUTS].sub}</p>
                        </CardPrimary.Header>
                        <CardPrimary.Content className="p-d-flex p-jc-center">
                            {!store.products.length && <Loader />}
                            <div className="donut-list">
                                {store.products && store.products.map(({ id, name, description, image }, i) =>
                                    <ProductSelector
                                        key={`donut-li-${i}`}
                                        name={name}
                                        description={description}
                                        image={image}
                                        onDecrement={() => decrementBox(id)}
                                        onFill={() => fillBox(id)}
                                        onIncrement={() => incrementBox(id)}
                                    />
                                )}
                            </div>
                        </CardPrimary.Content>
                    </CardPrimary>
                </div>

                <div className="card-step">
                    <CardPrimary>
                        <CardPrimary.Header>
                            <div className="p-d-flex p-jc-between  p-mb-4">
                                <Button onClick={goBackwards} icon="pi pi-arrow-left" className="p-shadow-4 p-button-rounded p-button-secondary" />
                                <span className="p-tag p-mb-2">Passo 3 / 3</span>
                            </div>
                            <h1 className="subtitle2">{orderSteps[STEP_THREE_SELECT_SIZE].title}</h1>
                            <p className="text1">{orderSteps[STEP_THREE_SELECT_SIZE].sub}</p>
                        </CardPrimary.Header>
                        <CardPrimary.Content>
                            <Icon1 />
                            <ButtonPrimary>Pequeno (4cm de diâmetro)</ButtonPrimary>
                            <ButtonPrimary>Grande (8cm de diâmetro)</ButtonPrimary>
                        </CardPrimary.Content>
                    </CardPrimary>
                </div>

                <div className="card-step">
                    <CardPrimary>
                        <CardPrimary.Header>
                            <div className="p-d-flex p-jc-start p-mb-4">
                                <Button onClick={goBackwards} icon="pi pi-arrow-left" className="p-shadow-4 p-button-rounded p-button-secondary" />
                            </div>
                            <h1 className="subtitle2">{orderSteps[STEP_FOUR_FINISH].title}</h1>
                            <p className="text1">{orderSteps[STEP_FOUR_FINISH].sub}</p>
                        </CardPrimary.Header>
                        <CardPrimary.Content>
                            <div className="box-option">
                                <DonutBox size={2} onClick={() => selectBox(BOX_SMALL_SIZE)} />
                            </div>
                            <div className="box-option">
                                <DonutBox size={6} onClick={() => selectBox(BOX_BIG_SIZE)} />
                            </div>
                        </CardPrimary.Content>
                    </CardPrimary>
                </div>

            </Slider>
        </>
    );
}
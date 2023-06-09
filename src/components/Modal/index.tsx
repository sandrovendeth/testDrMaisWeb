import {
  Container,
  Content,
  Text,
  ButtonClose,
  Footer,
  ButtonConfirm,
  ButtonCancel,
  Div,
} from "./styles";


interface Props {
  closeModal: any;
}

export function Modal({ closeModal }: Props) {
  return (
    <Container>
      <Content>
        <Div>
          <Text>Confirmar a exclusão deste filme?</Text>

          <ButtonClose onClick={() => closeModal(false)}>X</ButtonClose>
        </Div>
        <Footer>
          <ButtonConfirm>Confirmar</ButtonConfirm>
          <ButtonCancel onClick={() => closeModal(false)}>
            Cancelar
          </ButtonCancel>
        </Footer>
      </Content>
    </Container>
  );
}

"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  TextField,
  Button,
  Alert,
  Snackbar,
  CircularProgress,
} from "@mui/material";
import { Email, Phone, LocationOn } from "@mui/icons-material";

// Componente para exibir ícones de contato
const ContactIcon = ({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) => (
  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
    {icon}
    <Typography sx={{ ml: 2 }}>{text}</Typography>
  </Box>
);

// Componente para o formulário de contato
const ContactForm = ({
  control,
  errors,
  isSubmitting,
  onSubmit,
}: {
  control: any;
  errors: any;
  isSubmitting: boolean;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}) => (
  <form onSubmit={onSubmit}>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          rules={{ required: "Name is required" }}
          render={({ field }: { field: any }) => (
            <TextField
              {...field}
              fullWidth
              label="Seu Nome"
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          )}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{
            required: "Email is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Email is invalid",
            },
          }}
          render={({ field }: { field: any }) => (
            <TextField
              {...field}
              fullWidth
              label="Seu Email"
              type="email"
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          )}
        />
      </Grid>
      <Grid item xs={12}>
        <Controller
          name="subject"
          control={control}
          defaultValue=""
          rules={{ required: "Subject is required" }}
          render={({ field }: { field: any }) => (
            <TextField
              {...field}
              fullWidth
              label="Assunto"
              error={!!errors.subject}
              helperText={errors.subject?.message}
            />
          )}
        />
      </Grid>
      <Grid item xs={12}>
        <Controller
          name="message"
          control={control}
          defaultValue=""
          rules={{ required: "Message is required" }}
          render={({ field }: { field: any }) => (
            <TextField
              {...field}
              fullWidth
              label="Mensagem..."
              multiline
              rows={4}
              error={!!errors.message}
              helperText={errors.message?.message}
            />
          )}
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          disabled={isSubmitting}
          sx={{ mt: 2 }}
        >
          {isSubmitting ? (
            <CircularProgress size={24} color="inherit" />
          ) : (
            "Enviar"
          )}
        </Button>
      </Grid>
    </Grid>
  </form>
);

// Componente principal da página de contato
export default function ContactPage() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  // Simulação de envio do formulário
  const onSubmit = async () => {
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simula uma chamada à API
      setSnackbar({
        open: true,
        message: "Sua mensagem foi enviada com sucesso !",
        severity: "success",
      });
      reset(); // Reseta o formulário após o envio
    } catch (error) {
      setSnackbar({
        open: true,
        message: "Ocorreu um erro. Por favor, tente novamente.",
        severity: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box sx={{ mb: 6, textAlign: "center" }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Entre em Contato
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Gostaríamos muito de ouvir de você
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {/* Informações de Contato */}
        <Grid item xs={12} md={5}>
          <Paper elevation={2} sx={{ p: 4, height: "100%" }}>
            <Typography variant="h5" gutterBottom>
              Entre em Contato
            </Typography>
            <Typography paragraph color="text.secondary">
              Tem dúvidas sobre nossos produtos ou serviços? Entre em contato
              conosco diretamente pelos seguintes canais ou usando o formulário
              de contato.
            </Typography>

            <Box sx={{ mt: 4 }}>
              <ContactIcon
                icon={<Email color="primary" />}
                text="info@modernshop.com"
              />
              <ContactIcon
                icon={<Phone color="primary" />}
                text="+55 (55) 1233-4567"
              />
              <ContactIcon
                icon={<LocationOn color="primary" />}
                text="123 Comercial, Y 101"
              />
            </Box>

            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" gutterBottom>
                Horário de Atendimento
              </Typography>
              <Typography>Segunda - Sexta: 9am - 6pm</Typography>
              <Typography>Sabado: 10am - 4pm</Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Formulário de Contato */}
        <Grid item xs={12} md={7}>
          <Paper elevation={2} sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom>
              Envie-nos uma mensagem
            </Typography>
            <ContactForm
              control={control}
              errors={errors}
              isSubmitting={isSubmitting}
              onSubmit={handleSubmit(onSubmit)}
            />
          </Paper>
        </Grid>
      </Grid>

      {/* Snackbar para feedback */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert onClose={handleCloseSnackbar} variant="filled">
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
}

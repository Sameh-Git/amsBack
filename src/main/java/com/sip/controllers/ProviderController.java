package com.sip.controllers;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.sip.entities.Provider;
import com.sip.repositories.ProviderRepository;

@RestController
@RequestMapping({ "/providers", "/hom*" })
@CrossOrigin(origins = "*")
public class ProviderController {
	private final Path root = Paths.get(System.getProperty("user.dir") + "/src/main/resources/static/images/provider");
	@Autowired
	private ProviderRepository providerRepository;

	@GetMapping("/list")
	public List<Provider> getAllProviders() {
		return (List<Provider>) providerRepository.findAll();
	}

	@PostMapping("/add")
	public Provider createProvider(@RequestParam("imageFile") MultipartFile[] files, @RequestParam("name") String name,
			@RequestParam("email") String email, @RequestParam("address") String address,
			@RequestParam("imageName") String imageName) throws IOException {

		StringBuilder fileName = new StringBuilder();
		MultipartFile file = files[0];
		Path fileNameAndPath = Paths.get(System.getProperty("user.dir") + "/src/main/resources/static/images/provider",
				file.getOriginalFilename());
		fileName.append(file.getOriginalFilename());
		try {
			Files.write(fileNameAndPath, file.getBytes());
		} catch (IOException e) {
			e.printStackTrace();
		}

		Provider provider = new Provider(name, address, email, fileName.toString());

		providerRepository.save(provider);

		return provider;
	}

	@PutMapping("/{providerId}")
	public Provider updateProvider(@PathVariable Long providerId, @RequestParam("imageFile") MultipartFile[] files,
			@RequestParam("name") String name, @RequestParam("email") String email,
			@RequestParam("address") String address, @RequestParam("imageName") String imageName
	// @Valid @RequestBody Provider providerRequest

	) {
		return providerRepository.findById(providerId).map(provider -> {
			// STEP 1 : delete Old Image from server
			String OldImageName = provider.getLogo();

			////////
			try {
				File f = new File(this.root + "/" + OldImageName); // file to be delete
				if (f.delete()) // returns Boolean value
				{
					System.out.println(f.getName() + " deleted"); // getting and printing the file name
				} else {
					System.out.println("failed");
				}
			} catch (Exception e) {
				e.printStackTrace();
			}

			/////// END STEP 1
			StringBuilder fileName = new StringBuilder();
			MultipartFile file = files[0];
			Path fileNameAndPath = Paths.get(
					System.getProperty("user.dir") + "/src/main/resources/static/images/provider",
					file.getOriginalFilename());
			fileName.append(file.getOriginalFilename());
			try {
				Files.write(fileNameAndPath, file.getBytes());
			} catch (IOException e) {
				e.printStackTrace();
			}

			provider.setName(name);
			provider.setEmail(email);
			provider.setAddress(address);
			provider.setLogo(fileName.toString());
			return providerRepository.save(provider);
		}).orElseThrow(() -> new IllegalArgumentException("ProviderId " + providerId + " not found"));
	}

	@DeleteMapping("/{providerId}")
	public ResponseEntity<?> deleteProvider(@PathVariable Long providerId) {
		return providerRepository.findById(providerId).map(provider -> {
			providerRepository.delete(provider);
			////////
			try {
				File f = new File(this.root + "/" + provider.getLogo()); // file to be delete
				if (f.delete()) // returns Boolean value
				{
					System.out.println(f.getName() + " deleted"); // getting and printing the file name
				} else {
					System.out.println("failed");
				}
			} catch (Exception e) {
				e.printStackTrace();
			}

			///////
			return ResponseEntity.ok().build();
		}).orElseThrow(() -> new IllegalArgumentException("ProviderId " + providerId + " not found"));
	}

	@GetMapping("/{providerId}")
	public Provider getProvider(@PathVariable Long providerId) {
		Optional<Provider> p = providerRepository.findById(providerId);
		return p.get();
	}

}
